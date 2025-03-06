export const PlanUpgrade = () => {
    const plans = [
        {
            id: 1,
            name: "Basic plan",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 12,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            id: 3,
            name: "Enterprise",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 60,
            isMostPop: false,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
    ];

    return (
        <section className="py-1 min-h-screen flex items-center justify-center">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-lg font-semibold sm:text-2xl">
                        Upgrade Plan
                    </h3>
                    <div className="mt-3 max-w-xl">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur consequat nunc.
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex justify-center gap-8">
                    {plans.map((item) => (
                        <div
                            key={item.id}
                            className={`relative flex flex-col w-9/10 sm:w-4/5 lg:w-2/3 xl:w-2/5 rounded-xl border-2 p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-100 transform hover:scale-105 ${item.isMostPop ? "mt-10" : ""}`}
                        >
                            {item.isMostPop && (
                                <span className="w-28 absolute -top-5 left-0 right-0 mx-auto px-3 py-1 rounded-full border shadow-md bg-white text-center text-gray-700 text-xs font-semibold">Most popular</span>
                            )}
                            <div className="space-y-4 border-b pb-4">
                                <span className="text-indigo-600 font-medium text-sm">{item.name}</span>
                                <div className="text-gray-800 text-xl font-semibold">
                                    ${item.price} <span className="text-sm text-gray-600 font-normal">/mo</span>
                                </div>
                                <button
                                    className="px-3 py-2 rounded-lg w-full font-semibold text-xs text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 transition-colors duration-200 cursor-pointer"
                                >
                                    Upgrade Now
                                </button>
                            </div>
                            <ul className="space-y-2">
                                <li className="pb-2 text-gray-800 font-medium text-xs">
                                    <p>Features</p>
                                </li>
                                {item.features.map((featureItem, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-xs">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-3 w-3 text-indigo-600"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        {featureItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
