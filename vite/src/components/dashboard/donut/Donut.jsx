import { useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";
import useDashBoard from "../../../hooks/useDashBoardData";

export const DonutChart = ({ activeSection }) => {
  const { data } = useDashBoard();

  // Extract data from dashboard
  const first_five = data?.quickStats?.stock_per_product?.five;  // Stock data
  const salesData = data?.quickStats?.first_five_sales;  // Sales data
  const profitData = data?.profitPerProduct?.profit_five_prods;  // Profit data


  const [state, setState] = useState({
    series: [],
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        }
      },
      title: {
        text: 'Data for ' + activeSection.charAt(0).toUpperCase() + activeSection.slice(1),
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  });

  useEffect(() => {
    if (activeSection === "products") {
      const productNames = first_five?.map(item => item?.product_name) || ["Eggs", "Milk", "Bread", "Cheese", "Butter"];
      const seriesData = first_five?.map(item => item?.stock_count) || [44, 55, 41, 17, 15]; 
      
      setState((prevState) => ({
        ...prevState,
        series: seriesData,
        options: {
          ...prevState.options,
          labels: productNames
        }
      }));
    } else if (activeSection === "sales") {
      const seriesData = salesData?.map(item => item?.stock_count) || [33, 25, 23, 19, 12];
      const productNames = salesData?.map(item => item?.product_name) || ["Eggs", "Milk", "Bread", "Cheese", "Butter"];
      
      setState((prevState) => ({
        ...prevState,
        series: seriesData,
        options: {
          ...prevState.options,
          labels: productNames
        }
      }));
    } else if (activeSection === "profit") {
      const seriesData = profitData?.map(item => item?.profit) || [55, 44, 23, 12, 33]; 
      console.log("Profit Data Series", seriesData);
      const productNames = profitData?.map(item => item?.product) || ["Eggs", "Milk", "Bread", "Cheese", "Butter"];
      
      setState((prevState) => ({
        ...prevState,
        series: seriesData,
        options: {
          ...prevState.options,
          labels: productNames
        }
      }));
    }
  }, [activeSection, first_five, salesData, profitData]);

  return (
    <div className="w-120 bg-gray-200">
      <div id="chart" className="border-2 border-black py-4">
        <ReactApexChart options={state.options} series={state.series} type="donut" width={380} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};
