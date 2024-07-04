<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;

class StripePlan extends Model
{
    const PLAN_HOBBY_MONTHLY = 'price_1PY7sPI0f92oKfvMpPWeCBko';
    const PLAN_HOBBY_YEARLY = 'price_1PY7sPI0f92oKfvMF0Ix9tfo';
    const PLAN_HOBBY_NAME = 'hobby';

    const PLAN_BUSINESS_MONTHLY = 'price_1PY7tTI0f92oKfvM9jYuFskW';
    const PLAN_BUSINESS_YEARLY = 'price_1PY7tTI0f92oKfvMMmIb0ARP';
    const PLAN_BUSINESS_NAME = 'business';

    const PLAN_ENTERPRISE_MONTHLY = 'price_1PY7tTI0f92oKfvM9jYuFskW';
    const PLAN_ENTERPRISE_YEARLY = 'price_1PY7tTI0f92oKfvMMmIb0ARP';
    const PLAN_ENTERPRISE_NAME = 'enterprise';


    public static function getPlans(): array
    {
        return [
            self::PLAN_HOBBY_NAME => [
                'monthly' => self::PLAN_HOBBY_MONTHLY,
                'yearly' => self::PLAN_HOBBY_YEARLY,
                'name' => 'Hobby',
                'id' => 'hobby',
                'href' => Auth::check() ? route('get_started') : route('register'),
                'priceMonthly' => '£15',
                'priceYearly' => '£150',
                'priceYearlyPromo' => 'Get 2 months free with yearly plan',
                'description' => 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
                'features' => [
                    '5 products',
                    'Up to 1,000 subscribers',
                    'Basic analytics',
                    '48-hour support response time',
                    'unlimited'
                ],
            ],
            self::PLAN_BUSINESS_NAME => [
                'monthly' => self::PLAN_BUSINESS_MONTHLY,
                'yearly' => self::PLAN_BUSINESS_YEARLY,
                'name' => 'Business',
                'id' => 'business',
                'href' => Auth::check() ? route('get_started') : route('register'),
                'priceMonthly' => '£30',
                'priceYearly' => '£340',
                'priceYearlyPromo' => 'Get 2 months free with yearly plan',
                'description' => 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
                'features' => [
                    '5 products',
                    'Up to 1,000 subscribers',
                    'Basic analytics',
                    '48-hour support response time',
                    'unlimited'
                ],
            ],
            self::PLAN_ENTERPRISE_NAME => [
                'monthly' => self::PLAN_ENTERPRISE_MONTHLY,
                'yearly' => self::PLAN_ENTERPRISE_YEARLY,
                'name' => 'Enterprise',
                'id' => 'enterprise',
                'href' => Auth::check() ? route('get_started') : route('register'),
                'priceMonthly' => '£30',
                'priceYearly' => '£340',
                'priceYearlyPromo' => 'Get 2 months free with yearly plan',
                'description' => 'Modi dolorem expedita deleniti. Corporis iste qui inventore pariatur adipisci vitae.',
                'features' => [
                    'Unlimited products',
                    'Up to 1,000,000 subscribers',
                    'Advanced analytics',
                    '2 Hour response time',
                    'Add team members',
                    'Notification settings',
                ],
            ],

        ];
    }


}
