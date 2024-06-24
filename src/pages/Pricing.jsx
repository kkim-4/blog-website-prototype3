import React from 'react';

const Pricing = () => {
    const plans = [
        {
            name: 'Basic',
            price: '$9.99/month',
            features: [
                'Access to 100 stories per month',
                'Personalized story recommendations',
                'Basic reading level adjustments',
            ],
        },
        {
            name: 'Standard',
            price: '$19.99/month',
            features: [
                'Access to 500 stories per month',
                'Advanced story recommendations',
                'Enhanced reading level adjustments',
                'Access to new stories weekly',
            ],
        },
        {
            name: 'Premium',
            price: '$29.99/month',
            features: [
                'Unlimited story access',
                'Premium story recommendations',
                'Full reading level adjustments',
                'Early access to new stories',
                'Ad-free experience',
            ],
        },
    ];

    return (
        <div className="w-full min-h-screen bg-gray-100 py-20">
            <div className="max-w-[1240px] mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Pricing Plans</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-bold mb-4 text-center">{plan.name}</h3>
                            <p className="text-center text-gray-600 text-xl mb-6">{plan.price}</p>
                            <ul className="mb-6">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="text-gray-600 text-lg mb-2">
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                Choose Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Pricing;
