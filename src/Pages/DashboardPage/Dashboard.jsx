import { useState } from "react";
import DashboardAllSupplies from "../../components/DashboardComponents/DashboardAllSupplies/DashboardAllSupplies";
import SuppliesPieChart from "../../components/DashboardComponents/PieChart/PieChart";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("chart");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-2 gap-1  items-center m-1">
          <button
            onClick={() => handleTabClick("chart")}
            className="text-white p-3 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] border border-[#5A01CB] bg-[#5A01CB] shadow-md flex items-center justify-center gap-2"
          >
            <span className="truncate">Chart</span>
          </button>
          <button
            onClick={() => handleTabClick("supplies")}
            className="text-white p-3 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] border border-[#5A01CB] bg-[#5A01CB] shadow-md flex items-center justify-center gap-2"
          >
            <span className="truncate">Supplies</span>
          </button>
        </div>
        <div className="py-8">
          {activeTab === "chart" && <SuppliesPieChart />}
          {activeTab === "supplies" && <DashboardAllSupplies />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
