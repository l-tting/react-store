import React from "react";
import { FiDollarSign, FiTag, FiBox } from "react-icons/fi"; // Updated icons
import { BiTrendingUp, BiTrendingDown } from "react-icons/bi";

// StatisticCard Component (Directly inside DashStats)
const StatisticCard = ({ title, value, trend, percentage, icon: Icon, color, details }) => {
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <div
      className="bg-white p-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
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

const ProductsSta = ({ product_metrics }) => {
  const product_count = product_metrics?.product_count || 0;
  const lowest_price_product_name = product_metrics?.lowest_price_product?.name || 0;
  const lowest_price_product_price = product_metrics?.lowest_price_product?.price || 0;
  const highest_price_product_name = product_metrics?.highest_price_product?.name || 0;
  const highest_price_product_price = product_metrics?.highest_price_product?.price || 0;
  const average_price = product_metrics?.average_price || 0;
  console.log("mer", product_metrics);

  // Placeholder data for static rendering
  const placeholderData = [
    {
      title: 'Stock Total',
      value: `${product_count} units`,
      trend: 'up',
      percentage: 10,
      icon: FiBox, // Changed to FiBox (inventory related)
      color: 'bg-green-500',
      details: '10% increase in product A sales',
    },
    {
      title: 'Lowest Price Product',
      value: `${lowest_price_product_name} - Ksh. ${lowest_price_product_price}`,
      trend: 'down',
      percentage: -5,
      icon: FiTag, 
      color: 'bg-[#1E293B]',
      details: '5% decrease in product B sales',
    },
    {
      title: 'Highest Price Product',
      value: `${highest_price_product_name} - Ksh.${highest_price_product_price}`,
      trend: 'down',
      percentage: -5,
      icon: FiTag, 
      color: 'bg-[#1E293B]',
      details: '5% decrease in product B sales',
    },
    {
      title: 'Average Product Price',
      value: `Ksh. ${average_price}`,
      trend: 'down',
      percentage: -5,
      icon: FiDollarSign, // Changed to FiDollarSign (pricing related)
      color: 'bg-green-500',
      details: '5% decrease in product B sales',
    },
  ];

  return (
    <div className="p-4 bg-gray-50 min-h-20 mb-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-gray-800 mb-6 lg:ml-8"></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 lg:ml-8">
          {placeholderData.map((stat, index) => (
            <StatisticCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsSta;
