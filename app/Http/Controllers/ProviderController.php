<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller
{

    /**
     * Redirect to auth provider for authentication
     *
     * @param $provider
     * @return RedirectResponse|\Symfony\Component\HttpFoundation\RedirectResponse
     */
    public function redirect($provider){
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Callback from auth provider
     *
     * @param $provider
     * @return Application|\Illuminate\Foundation\Application|RedirectResponse|Redirector
     */
    public function callback($provider) {
        try {
            // Log out the current user, if any
            Auth::logout();

            // Retrieve the user information from the provider
            $providerUser = Socialite::driver($provider)->user();

            // Try to find the user by email and provider ID
            $user = $this->findUser($providerUser->email, $providerUser->id);

            // If user exists, log them in and redirect to the dashboard
            if ($user) {
                return $this->loginExistingUser($user);
            }

            // If user does not exist, create a new user, log them in, and redirect to the dashboard
            $user = $this->createNewUser($provider, $providerUser);
            return $this->loginNewUser($user);

        } catch (\Exception $e) {
            // Log the error and redirect to the login page with an error message
            \Log::error('Error logging in via ' . $provider . ': ' . $e->getMessage());
            return redirect(route('login'))->withErrors(['email' => 'There was an error logging in']);
        }
    }

    /**
     * Find a user by email and provider ID
     *
     * @param string $email
     * @param string $providerId
     * @return User|null
     */
    private function findUser($email, $providerId) {
        return User::where('email', $email)
            ->where('provider_id', $providerId)
            ->first();
    }

    /**
     * Log in an existing user and redirect to the dashboard
     *
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    private function loginExistingUser($user) {
        event(new Registered($user));
        Auth::login($user);
        return redirect(route('dashboard'));
    }

    /**
     * Create a new user from provider information
     *
     * @param string $provider
     * @param $providerUser
     * @return User
     */
    private function createNewUser($provider, $providerUser) {
        return User::updateOrCreate([
            'provider_id' => $providerUser->id,
            'provider' => $provider
        ], [
            'name' => $providerUser->name,
            'email' => $providerUser->email,
            'password' => Hash::make(Str::random(24)), // store a random password
            'provider_token' => $providerUser->token,
        ]);
    }

    /**
     * Log in a new user and redirect to the dashboard
     *
     * @param User $user
     * @return \Illuminate\Http\RedirectResponse
     */
    private function loginNewUser($user) {
        event(new Registered($user));
        Auth::login($user);
        return redirect(route('dashboard'));
    }
}

