<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $user = $request->user()->with('files')->first();

        // Update user attributes from validated request data
        $user->fill($request->validated());

        // Handle file upload
        if ($request->hasFile('file')) {
            // Delete old avatar if exists
            if ($user->files->count() == 1){
                Storage::disk('s3')->delete($user->files[0]->path);
                $user->files[0]->delete();
            }

            // Store new avatar
            $filename = $request->file('file')->getClientOriginalName();
            $path = $request->file('file')->store('files', 's3');

            // Create new avatar record
            $user->files()->create([
                'filename' => $filename,
                'path' => $path,
                'type' => $request->file('file')->getMimeType(),
            ]);
        }

        // If email is updated, mark email as unverified
        if ($user->isDirty('email')) {
            $user->email_verified_at = null;
        }

        // Save user changes
        $user->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function checkoutSuccess(Request $request)
    {
        if($request->user()->has_accessed_success_page) {
            return Redirect::route('dashboard');
        }

        $request->user()->update([
            'has_accessed_success_page' => true,
        ]);
        return Inertia::render('CheckoutSuccess');
    }
}
