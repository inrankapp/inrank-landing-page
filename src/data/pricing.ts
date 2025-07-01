import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Free Trial',
        price: 0,
        sp500: [
            '14 days unlimited access',
            'All trading strategies',
            'Real-time signals & notifications',
            'No credit card required',
        ],
    },
    {
        name: 'Pro Monthly',
        price: 40,
        sp500: [
            'Full access after trial',
            'All trading strategies',
            'Real-time signals & notifications',
            'Priority support',
            'Cancel anytime',
        ],
    },
    {
        name: 'Pro Yearly',
        price: 400,
        sp500: [
            '12 months full access',
            'All trading strategies',
            'Real-time signals & notifications',
            'Priority support',
            'Cancel anytime',
            'Save $80 compared to monthly',
        ],
    },
];