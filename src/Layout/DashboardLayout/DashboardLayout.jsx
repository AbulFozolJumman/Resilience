import Navbar from "../../components/ui/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../../components/ui/Footer";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
