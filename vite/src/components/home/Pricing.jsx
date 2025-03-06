import { useNavigate } from "react-router-dom";


const Pricing = () => {
  const navigate = useNavigate();

  const handleTierSelect = (tierId) => {
    navigate(`/company?tier_id=${tierId}`);
  };

  const plans = [
    {
      id: 1,
      name: "Free Trial",
      desc: "Small business",
      price: 0,
      isMostPop: false,
      features: [
        "5 maximum products in stock",
        "Basic transaction processing",
        "Simple sales reporting",
        "Limited inventory tracking",
        "Mobile payment options",
        "Email support",
      ],
    },
    {
      id: 2,
      name: "Standard ",
      desc: "Growing business with complex needs.",
      price: 30,
      isMostPop: true,
      features: [
        "20 maximum products in stock",
        "Advanced inventory management",
        "Employee management ",
        "Integrations with accounting and CRM systems",
        "Detailed sales and financial reporting",
        "Priority email support and limited phone support",
      ],
    },
    {
      id: 3,
      name: "Enterprise",
      desc: "Large business or franchise",
      price: 100,
      isMostPop: false,
      features: [
        '100 maximum products',
        "Multi-location management",
        "Advanced reporting and analytics",
        "Loyalty programs & customer tracking ",
        "Priority support with a dedicated service team",
        "API access and advanced security features",
      ],
    },
  ];

  return (
    <section className="py-4">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-xl mx-auto sm:text-center">
          {/* <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">
            Our Plans
          </h3> */}
          <div>
          

          </div>
          {/* <div className="mt-3 max-w-xl">
            <p>Select payment plan. Let's get started.</p>
          </div> */}
        </div>
        <div className="mt-16 justify-center gap-8 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3 lg:w-[80%] lg:ml-28 cursor-pointer ">
          {plans.map((item) => (
            <div
              key={item.id}
              className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-100 transform hover:scale-105 ${
                item.isMostPop ? "mt-10" : ""
              }`}
            >
              {item.isMostPop && (
                <span className="w-28 absolute -top-5 left-0 right-0 mx-auto px-3 py-1 rounded-full border shadow-md bg-white text-center text-gray-700 text-xs font-semibold">
                  Most popular
                </span>
              )}
              <div className="space-y-4 border-b pb-4">
                <span className="text-indigo-600 font-medium text-sm">
                  {item.name}
                </span>
                <div className="text-gray-800 text-xl font-semibold">
                <i> Ksh. {item.price}{" "}</i>
                  <span className="text-sm text-gray-600 font-normal">/mo</span>
                </div>
                <p className="text-xs font-semibold">{item.desc}</p>
                <button
                  onClick={() => handleTierSelect(item.id)}
                  className="px-3 py-2 rounded-lg w-full font-semibold text-xs text-white bg-[#1E293B] hover:bg-gray-500 hover:text-[#f1b04c] active:bg-indigo-700 transition-colors duration-200 cursor-pointer animate-bounce"
                >
                    <span className="text-white hover:text-[#f1b04c]  font-bold">Get Started</span>
                </button>
              </div>
              <ul className="space-y-2">
                <li className="pb-2 text-gray-800 font- text-xs">
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
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
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

export default Pricing;
