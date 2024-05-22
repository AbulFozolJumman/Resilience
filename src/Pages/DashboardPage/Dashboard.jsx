import { useState } from "react";
import DashboardAllSupplies from "../../components/DashboardComponents/DashboardAllSupplies/DashboardAllSupplies";
import PieChart from "../../components/DashboardComponents/PieChart/PieChart";
import CreateSupply from "../../components/DashboardComponents/CreateSupply/CreateSupply";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("chart"); // Set an initial active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <>
      <div className="min-h-screen">
        <div className="grid grid-cols-3 gap-2 md:gap-5">
          <button
            onClick={() => handleTabClick("chart")}
            className="text-white p-4 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] hover:border hover:border-[#5A01CB] bg-[#5A01CB] shadow-md flex items-center justify-center gap-2"
          >
            {/* <SlEvent className="shrink-0" /> */}
            <span className="truncate">Chart</span>
          </button>
          <button
            onClick={() => handleTabClick("supplies")}
            className="p-4 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] hover:border hover:border-[#5A01CB] bg-[#5A01CB] text-white shadow-md flex items-center justify-center gap-2"
          >
            {/* <GrBusinessService className="shrink-0" /> */}
            <span className="truncate">Supplies</span>
          </button>
          <button
            onClick={() => handleTabClick("create-supply")}
            className="p-4 rounded hover:bg-white hover:text-[#5A01CB] focus:bg-indigo-600 focus:text-white focus:border focus:border-[#5A01CB] hover:border hover:border-[#5A01CB] bg-[#5A01CB] text-white shadow-md flex items-center justify-center gap-2"
          >
            {/* <TbToolsKitchen className="shrink-0" /> */}
            <span className="truncate">Create</span>
          </button>
        </div>
        <div className="py-8">
          {activeTab === "chart" && <PieChart />}
          {activeTab === "supplies" && <DashboardAllSupplies />}
          {activeTab === "create-supply" && <CreateSupply />}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
