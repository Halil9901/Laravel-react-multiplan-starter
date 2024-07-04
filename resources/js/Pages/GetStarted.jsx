import React, { useState, useEffect } from 'react';
import { Button, Card } from 'flowbite-react';
import { useForm } from '@inertiajs/react';

export default function GetStarted({ plans, p }) {
    const [selectedPlan, setSelectedPlan] = useState(p);
    const [selectPlanStripeId, setSelectPlanStripeId] = useState(null);
    const [billingCycle, setBillingCycle] = useState('monthly');

    const getPriceKey = (cycle) => {
        return cycle === 'monthly' ? 'priceMonthly' : 'priceYearly';
    };

    useEffect(() => {
        if (p && plans[p]) {
            setSelectPlanStripeId(plans[p][billingCycle]);
        }
    }, [p, plans, billingCycle]);

    const handlePlanSelection = (key, stripeKey) => {
        setSelectedPlan(key);
        setSelectPlanStripeId(stripeKey);
        console.log(key, stripeKey);
    };

    const handleBillingCycleChange = (e) => {
        const cycle = e.target.value;
        console.log(cycle);
        setBillingCycle(cycle);
        if (selectedPlan) {
            setSelectPlanStripeId(plans[selectedPlan][cycle]);
        }
    };

    const { data, setData, post, processing } = useForm({
        priceId: selectPlanStripeId,
        planType: selectedPlan,
    });

    useEffect(() => {
        setData({
            priceId: selectPlanStripeId,
            planType: selectedPlan,
        });
    }, [selectPlanStripeId, selectedPlan]);

    const handleSubmit = (event) => {
        event.preventDefault();
        post(route('subscription.checkout'),{
            onSuccess: () => console.log('book post ok'),
        });

    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen space-y-8 bg-gray-50 py-12">
            <h1 className="text-4xl font-extrabold text-gray-900">Pick your plan</h1>
            <p className="text-lg text-gray-600">Hi {p}, choose the best plan that fits your needs.</p>

            <div className="text-center">
                <h4 className="text-2xl font-bold text-gray-800 mb-4">Choose a billing cycle:</h4>
                <div className="flex justify-center space-x-5">
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="billing"
                            value="monthly"
                            checked={billingCycle === 'monthly'}
                            onChange={handleBillingCycleChange}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="text-lg text-gray-700">Monthly</span>
                    </label>
                    <label className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name="billing"
                            value="yearly"
                            checked={billingCycle === 'yearly'}
                            onChange={handleBillingCycleChange}
                            className="form-radio h-5 w-5 text-blue-600"
                        />
                        <span className="text-lg text-gray-700">Yearly</span>
                    </label>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                <div className="flex flex-wrap -mx-2">
                    {Object.entries(plans).map(([key, plan]) => (
                        <Card
                            key={key}
                            className={`p-4 border-2 rounded-lg transition-transform transform hover:scale-105 cursor-pointer ${selectedPlan === key ? 'border-blue-500' : 'border-gray-200'} max-w-xs m-2 flex-grow`}
                            onClick={() => handlePlanSelection(key, plan[billingCycle])}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                            <div className="flex space-x-5">
                                <p className="text-base text-gray-700 mb-2">Price: {plan[getPriceKey(billingCycle)]}</p>
                            </div>
                            <p className="text-base text-gray-700 mb-2 w-full break-words">{plan.description}</p>
                            <p className="text-base text-gray-700 mb-4">Features:</p>
                            <ul className="list-disc list-inside text-gray-600 space-y-2">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>

            {selectPlanStripeId && (
                <form onSubmit={handleSubmit}>
                    {/* Hidden Inputs */}
                    <input type="hidden" name="priceId" value={data.priceId}/>
                    <input type="hidden" name="planType" value={data.planType}/>

                    {/* Submit Button */}
                    <Button type="submit"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg hover:bg-blue-700 transition-colors"
                            disabled={processing}>
                        {processing ? 'Processing...' : 'Get started'}
                    </Button>
                </form>
            )}
        </div>
    );
}
