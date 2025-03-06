import React from 'react';

const DashboardNavbar = ({ activeSection, onSectionChange }) => {
  return (
    <div>
      <nav className="p-4">
        <ul className="flex lg:ml-10 space-x-8">
          <li>
            <button
              onClick={() => onSectionChange('products')}
              className={`text-lg font-semibold cursor-pointer ${activeSection === 'products' ? 'border-b-2 border-yellow-500' : 'text-gray'} hover:text-yellow-500`}
            >
              Stock
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange('sales')}
              className={`text-lg font-semibold cursor-pointer ${activeSection === 'sales' ? 'border-b-2 border-yellow-500' : 'text-gray'} hover:text-yellow-500`}
            >
              Sales
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange('profit')}
              className={`text-lg font-semibold cursor-pointer ${activeSection === 'profit' ? 'border-b-2 border-yellow-500' : 'text-gray'} hover:text-yellow-500`}
            >
              Profit
            </button>
          </li>
          <li>
            <button
              onClick={() => onSectionChange('profit')}
              className={`text-lg font-semibold cursor-pointer  ? 'border-b-2 border-yellow-500' : 'text-gray'} hover:text-yellow-500`}
            >
              Plans
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DashboardNavbar;
