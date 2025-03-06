const PlanHeader = () => {
    return (
      <header className="bg-gr mb- lg:px-32 lg:mt-8">
        <div className="max-w-7xl mx-auto flex items-start pt-0">
          {/* Left Section */}
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2 border-b-8 w-42"> {/* Reduced border width to 2px */}
              Subscription Plan
            </h2>
            <p className="text-base text-gray-600">View and manage my subscription plan</p>
          </div>
  
          {/* Right Section: Floated Card */}
          <div className="bg-slate-200 p-6 shadow-lg rounded-lg w-72 ml-4">
            <h3 className="text-lg font-semibold mb-4">Current Plan</h3>
            <ul className="space-y-2">
              <li className="text-sm text-gray-600">Plan: 120</li>
              <li className="text-sm text-gray-600">Price: $3,500</li>
              <li className="text-sm text-gray-600">Expires: 15</li>
            </ul>
          </div>
        </div>
      </header>
    );
  };
  
  export default PlanHeader;
  