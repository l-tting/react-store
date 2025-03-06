import React, { useState } from "react";
import { FiDollarSign, FiUsers, FiShoppingBag, FiActivity, FiPackage } from "react-icons/fi";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

const StatisticCard = ({ title, value, trend, percentage, icon: Icon, color, details, isButton }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (isButton) {
    return (
      <button
        className="bg-blue-600 text-white font-bold py-1 px-2 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center text-sm w-40 h-12 mx-auto"
        onClick={() => alert("Navigating to Detailed Report")}
      >
        <Icon className="w-4 h-2 mr-1" />
        {title}
      </button>
    );
  }

  return (
    <div
      className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={() => setShowDetails(!showDetails)}
      role="button"
      tabIndex={0}
      aria-expanded={showDetails}
    >
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-lg ${color}`}>
          <Icon className="w-3 h-3 text-white" />
        </div>
        <div className="flex items-center space-x-1">
          {trend === "up" ? (
            <BiTrendingUp className="w-5 h-4 text-green-500" />
          ) : (
            <BiTrendingDown className="w-5 h-4 text-red-500" />
          )}
          <span className={trend === "up" ? "text-green-500" : "text-red-500"}>
            {percentage}%
          </span>
        </div>
      </div>
      <div className="mt-3">
        <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
        <p className="text-lg font-bold text-gray-800 mt-1">{value}</p>
      </div>
      {showDetails && (
        <div className="mt-1 pt-2 border-t border-gray-100">
          <p className="text-sm text-gray-600">{details}</p>
        </div>
      )}
    </div>
  );
};

const DashStats = ({ activeSection, sales_per_product, sales_time, stock_product, profit_time }) => {
  const low_stock_count = stock_product?.depleting_products;
  console.log("low stock", low_stock_count);

  const productData = [
    {
      title: "Stock Total",
      value: `403 units`,
      trend: "up",
      percentage: 10,
      icon: FiPackage,
      color: "bg-green-500",
      details: "10% increase in product A sales",
    },
    {
      title: "Products less than 20",
      value: `${low_stock_count} products`,
      trend: "down",
      percentage: -5,
      icon: FiPackage,
      color: "bg-red-500",
      details: "5% decrease in product B sales",
    },
    {
      title: "Add Stock",
      value: "",
      icon: FiActivity,
      color: "",
      isButton: true,
    },
  ];

  const most_sold_productname = sales_per_product?.most_sold_product?.prod_name;
  const most_sold_productsale = sales_per_product?.most_sold_product?.sale;
  const revenue_today = sales_time?.sales_today;
  const month_revenue = sales_time?.sales_this_month;

  const salesData = [
    {
      title: "Revenue Today",
      value: `Ksh.${revenue_today}`,
      trend: "up",
      percentage: 15,
      icon: FiShoppingBag,
      color: "bg-blue-500",
      details: "Sales increased by 15% compared to last month",
    },
    {
      title: "Revenue This Month",
      value: `Ksh.${month_revenue}`,
      trend: "up",
      percentage: 8,
      icon: FiShoppingBag,
      color: "bg-orange-500",
      details: "200 new customers joined this month",
    },
    
    {
      title: "Most Sold Product",
      value: `${most_sold_productname} - Ksh.${most_sold_productsale}`,
      trend: "up",
      percentage: 8,
      icon: FiShoppingBag,
      color: "bg-orange-500",
      details: "200 new customers joined this month",
    },
    {
      title: "Make Sale",
      value: "",
      icon: FiActivity,
      color: "",
      isButton: true,
    },
  ];

  const profit_today = profit_time?.today;
  const monthly_profit = profit_time?.month;

  const profitData = [
    {
      title: "Net Profit Today",
      value: `Ksh. ${profit_today}`,
      trend: "up",
      percentage: 20,
      icon: FiDollarSign,
      color: "bg-green-500",
      details: "Profit increased by 20% compared to last quarter",
    },
    {
      title: "Profit This Month",
      value: `Ksh. ${monthly_profit}`,
      trend: "down",
      percentage: -10,
      icon: FiDollarSign,
      color: "bg-red-500",
      details: "Expenses decreased by 10% this month",
    },
    {
      title: "Profit Report",
      value: "",
      icon: FiActivity,
      color: "",
      isButton: true,
    },
  ];

  let dataToRender = [];
  if (activeSection === "products") {
    dataToRender = productData;
  } else if (activeSection === "sales") {
    dataToRender = salesData;
  } else if (activeSection === "profit") {
    dataToRender = profitData;
  }

  return (
    <div className="p-4 bg-gray-50 min-h-20 mb-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-3 lg:ml-8">
          Dashboard Overview - {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:ml-8">
          {dataToRender.map((stat, index) => (
            <StatisticCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashStats;
