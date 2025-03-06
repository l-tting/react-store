import { DashHeader } from "../components/dashboard/DashHeader";
import DashboardNavbar from "../components/dashboard/DashNav";
import DashStats from "../components/dashboard/DashStats";
import { ApexChart } from "../components/dashboard/barchart/BarChart";
import { ApexChart2 } from "../components/dashboard/barchart/BarChart2";
import { DonutChart } from "../components/dashboard/donut/Donut";
import { QuickActions } from "../components/dashboard/QuickActions";
import { DonutChart2 } from "../components/dashboard/donut/Donut2";
import { useState } from "react";
import useNewDash from "../hooks/useNewDash";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("products");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const {salesPerProduct,salesTime,profitProduct,profitTime,stockProductData} = useNewDash()
console.log("spp",stockProductData.stock_per_product)


  return (
    <div>
      
       <div>
        <DashHeader />
      </div>
      <div>
        <DashboardNavbar
          activeSection={activeSection}
          onSectionChange={handleSectionChange}
        />
      </div>
      <div>
        <DashStats 
        activeSection={activeSection} 
        sales_per_product={salesPerProduct}
        sales_time = {salesTime}
        profit_product ={profitProduct}
        profit_time={profitTime}
        stock_product = {stockProductData}
        />
      </div>
      <div className="flex space-x-2"> 
        <div className="flex-1 lg:ml-14"> 
          <DonutChart activeSection={activeSection}/>
        </div>
        <div className="flex-1"> 
          <DonutChart2 activeSection={activeSection}/>
        </div>
      </div>
     
      <div>
      <ApexChart2
          activeSection={activeSection}
          salesPerProduct={salesPerProduct}
          profitProduct={profitProduct}
          stockProductData={stockProductData}
      />
      </div>
      <div className="flex space-x-2 mb-8">
        {/* <div className="flex-1 lg:ml-2">
        <ApexChart />
        </div>
        <div className="flex-1">
        <ApexChart2/>
        </div> */}
        
      </div> 
    </div>
  );
};

export default Dashboard;
