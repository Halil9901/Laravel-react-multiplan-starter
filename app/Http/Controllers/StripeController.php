<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class StripeController extends Controller
{
    public function checkout(Request $request)
    {
        $params = $request->all();
        $stripe = $request->user()
            ->newSubscription($params['planType'] ?? 'default', $params['priceId'])
            ->allowPromotionCodes()
            ->checkout([
                'success_url' => route('checkout.success'),
                'cancel_url' => route('get_started'),
            ]);

        return Inertia::location($stripe->url);
    }

    public function billingPortal(Request $request)
    {
        return $request->user()->redirectToBillingPortal(route('dashboard'));
    }
}
