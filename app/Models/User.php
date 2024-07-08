<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;

class User extends Authenticatable
{
    use HasFactory, Notifiable, billable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'has_accessed_success_page',
        'provider',
        'provider_id',
        'provider_token',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function isSubscribedToAnyPlan(): bool
    {
        return $this->subscriptions()
            ->where(function ($query) {
                $query->whereNull('ends_at')
                    ->orWhere('ends_at', '>', Carbon::now());
            })
            ->exists();
    }

    public function getPlan(): ?string
    {
        if (empty($this->subscriptions())){
            return null;
        }

        $subscription = $this->subscriptions()
            ->where(function ($query) {
                $query->whereNull('ends_at')
                    ->orWhere('ends_at', '>', Carbon::now());
            })
            ->where('stripe_status', 'active')
            ->first();

        return $subscription ? $subscription->type : null;
    }

    public function getAuthProvider(): ?string
    {
        return !empty($this->provider) ? $this->provider : null;
    }

    public function files()
    {
        return $this->morphMany(File::class, 'fileable');
    }
}
