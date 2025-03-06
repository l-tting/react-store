export const QuickActions = ({ activeSection }) => {
    // Define quick actions for each section
    const quickActions = {
      products: [
        { data: "Create Product" },
        { data: "Add Stock" },
      ],
      sales: [
        { data: "Create Sale" },
        { data: "Generate Invoice" },
      ],
      profit: [
        { data: "View Profit Reports" },
        { data: "Download Summary" },
      ],
    };
  
    // Get the actions based on the current active section
    const actions = quickActions[activeSection] || [];
  
    return (
      <section className="py-10 mb-4 ">
        <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
          <div className="max-w-2xl mx-auto text-center ">
            <h3 className="text-red-400 text-xl font-bold sm:text-xl border-r-2 border-l-2 ">
              Quick Actions
            </h3>
          </div>
          <div className="mt-8">
            <ul className="flex flex-col items-center justify-center gap-y-10 sm:flex-row sm:flex-wrap lg:divide-x">
              {actions.map((item, idx) => (
                <li key={idx} className="text-center px-12 md:px-16">
                  <button className="px-8 py-2 bg-[#020035] text-white rounded-md shadow-md hover:bg-indigo-700 focus:outline-none cursor-pointer">
                    <h4 className="text-base font-semibold">{item.data}</h4>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    );
  };
  