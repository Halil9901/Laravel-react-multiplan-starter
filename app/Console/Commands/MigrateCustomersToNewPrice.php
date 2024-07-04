<?php

namespace App\Console\Commands;

use App\Models\User;
use Illuminate\Console\Command;
use Laravel\Cashier\Cashier;
use Stripe\Exception\ApiErrorException;

class MigrateCustomersToNewPrice extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:migrate-customers-to-new-price {--currentPriceId=} {--newPriceId=}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     * @throws ApiErrorException
     */
    public function handle()
    {
        $currentPriceId = $this->option('currentPriceId');
        $newPriceId = $this->option('newPriceId');

        $currentPriceDetails = Cashier::stripe()->prices->retrieve($currentPriceId);
        $newPriceDetails = Cashier::stripe()->prices->retrieve($newPriceId);
        $this->info('Current price details: ' . $currentPriceDetails->nickname . ' - ' . number_format($currentPriceDetails->unit_amount /100, 2));
        $this->info('New price details: ' . $newPriceDetails->nickname . ' - ' . number_format($newPriceDetails->unit_amount /100, 2));

        $customersOnCurrentPrice = User::with('subscriptions')
            ->whereHas('subscriptions', function ($query) use ($currentPriceId) {
                $query->where('stripe_price', $currentPriceId);
            })
            ->get();
        $this->info('Customers on current price: ' . $customersOnCurrentPrice->count());
        $this->confirm('Do you want to migrate these users to the new price?');

        $customersOnCurrentPrice->each(function ($user) use ($newPriceId) {
            $user->subscription($user->subscription->type)->noProrate()->swap($newPriceId);
            $this->info('Migrated user: ' . $user->email);
        });

        $this->info('Migration complete');
    }
}
