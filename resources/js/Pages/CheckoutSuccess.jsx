import React, {useEffect} from 'react';
import { HiCheckCircle } from "react-icons/hi";
import { router } from '@inertiajs/react'
import { Spinner } from "flowbite-react";

export default function CheckoutSuccess() {

    useEffect(() => {
        setTimeout(() => {
            router.visit('/dashboard');
        }, 3000);
    }, []);

    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center px-4">
            <div
                className="flex flex-col items-center bg-white p-6 md:p-16 rounded-lg shadow-lg text-center w-full max-w-md">
                <HiCheckCircle className="text-green-500 text-6xl mb-4"/>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Payment Successful</h1>
                <p className="text-base md:text-lg">Thank you for completing your secure online payment.</p>
                <p className="text-gray-700 mt-4">Redirecting to dashboard...</p>
                <Spinner aria-label="Large spinner example" size="lg" className="mt-4"/>
            </div>
        </div>
    );
}
