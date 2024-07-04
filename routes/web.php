<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\StripeController;
use App\Models\StripePlan;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'plans' => StripePlan::getPlans(),
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Paid subscriber routes
Route::middleware(['auth', 'verified', 'subscribed'])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard', [
        ]);
    })->name('dashboard');
});


// Routes for users who have registered but have not paid
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    route::get('/get-started', function (Request $request) {
        if(Auth::user()->isSubscribedToAnyPlan()) {
            return redirect(route('dashboard'));
        }
        return Inertia::render('GetStarted', ['plans' => StripePlan::getPlans(), 'p' => $request->plan]);
    })->name('get_started');

});

// Stripe stuff
Route::get('/checkout-success', [ProfileController::class, 'checkoutSuccess'])->middleware(['auth', 'subscribed'])->name('checkout.success');
Route::post('/subscription-checkout', [StripeController::class, 'checkout'])->name('subscription.checkout');
Route::get('/billing-portal', [StripeController::class, 'billingPortal'])->name('billing.portal');

require __DIR__.'/auth.php';
