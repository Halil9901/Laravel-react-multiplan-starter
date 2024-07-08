<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Laravel\Socialite\Facades\Socialite;

class ProviderController extends Controller
{

    public function redirect($provider){
        return Socialite::driver($provider)->redirect();
    }

    public function callback($provider){
        try{
            $providerUser = Socialite::driver($provider)->stateless()->user();

            // Retrieve the user by email
            $user = User::where('email', $providerUser->email)->first();

            // Guard clause for email existing with a different provider
            if ($user && $user->provider != $provider) {
                return redirect(route('login'))->withErrors(['email' => 'This email uses a different provider']);
            }

            // If user exists and provider matches, log in the user
            if ($user) {
                Auth::login($user);
                return redirect(route('dashboard'));
            }

            $user = User::updateOrCreate([
                'provider_id' => $providerUser->id,
                'provider' => $provider
            ], [
                'name' => $providerUser->name,
                'email' => $providerUser->email,
                'password' => Hash::make(Str::random(24)),
                'provider_token' => $providerUser->token,
            ]);


            Auth::login($user);

            return redirect(route('dashboard'));


        } catch (\Exception $e) {
            \Log::info('error');
            \Log::error($e);
            return redirect(route('login'))->withErrors(['email' => 'There was an error logging in']);
        }


    }
}
