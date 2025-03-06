import React from "react";
import { FiDollarSign, FiShoppingBag } from "react-icons/fi";
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

// StatisticCard Component
const StatisticCard = ({ title, value, trend, percentage, icon: Icon, color, details }) => {
  const [showDetails, setShowDetails] = React.useState(false);

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

const StockStats = ({stock_metrics}) => {
  // Placeholder data

  const lowest_stock_product_name = stock_metrics?.stock_metrics?.lowest_stock_product?.name  
  const lowest_stock_product_stock = stock_metrics?.stock_metrics?.lowest_stock_product?.stock 
  const highest_stock_product_name = stock_metrics?.stock_metrics?.highest_stock_product?.name || 0
  const highest_stock_product_stock = stock_metrics?.stock_metrics?.highest_stock_product?.stock || 0
  const stock_worth = stock_metrics?.stock_worth || 0
  console.log('meeeee',lowest_stock_product_name)
  const placeholderData = [
    {
      title: "Lowest Stock Product",
      value: `${lowest_stock_product_name} - ${lowest_stock_product_stock} units ` || "No data ",
      trend: "up",
      percentage: 10,
      icon: FiShoppingBag,
      color:  "bg-[#1E293B]",
      details: "10% increase in product A sales",
    },
    {
      title: "Highest Stock Product",
      value: `${highest_stock_product_name} - ${highest_stock_product_stock} units`,
      trend: "down",
      percentage: -5,
      icon: FiShoppingBag,
      color: "bg-[#1E293B]",
      details: "5% decrease in product B sales",
    },
    {
      title: "Total Stock Worth",
      value: `Ksh.${stock_worth}`,
      trend: "down",
      percentage: -5,
      icon: FiDollarSign,
      color: "bg-green-500",
      details: "5% decrease in product B sales",
    },
   
  ];

  return (
    <div className="p- bg-gray-50 min-h-20 mb-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6 lg:ml-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:ml-38">
          {placeholderData.map((stat, index) => (
            <StatisticCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockStats;
