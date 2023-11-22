import logo from "../../assets/img/landingPage/logo1.svg";
import dashboard from "../../assets/img/dashboard/dashboard.jpeg";
import reports from "../../assets/img/dashboard/report2_pbl.png";
import patient_history from "../../assets/img/dashboard/patient_history.jpeg";
import patient_profile from "../../assets/img/dashboard/patient2_pbl.png";
import logoutimg from "../../assets/img/dashboard/logout.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
const DashboardSidebar = (props) => {
  const navigate = useNavigate();
  const logout = async () => {
    const res = await fetch("/logout");
    props.settoastCondition({
      status: "success",
      message: "Logged out Successfully!!!",
    });
    props.setToastShow(true);
    navigate("/");
  };

  const [Toggle, setToggle] = useState("Dashboard");
  return (
    <div className="h-screen overflow-y-scroll w-screen grid grid-cols-12">
      <div className="side_bar bg-white shadow col-span-2">
        <div className="flex m-2 mt-4  ">
          <div className="logo m-2  ">
            <img src={logo} className="w-16" alt="logo"></img>
          </div>
          <div className="heading font-poppins font-bold text-xl mt-4">
            <Link to="/">
              <h1>MediTron</h1>
            </Link>
          </div>
        </div>
        <nav>
          <div className="p-4">
            <h1 className="font-poppins font-bold text-xl mt-4">Main menu</h1>
            <div className="grid grid-rows-2 gap-4 font-bold font-poppins mt-4">
              <Link
                to="/doctor/dashboard"
                onClick={() => setToggle("Dashboard")}
                className={
                  Toggle === "Dashboard" ? "text-gray-900" : "text-gray-400"
                }
              >
                <div className="flex m-2 mt-8 ">
                  <div className="w-6 ml-1  ">
                    <img src={dashboard} alt="dashbord"></img>
                  </div>
                  <div className="font-poppins font-bold ml-4">
                    <h1>Dashboard</h1>
                  </div>
                </div>
              </Link>
              <Link
                to="/doctor/reports"
                onClick={() => setToggle("Reports")}
                className={Toggle === "Reports" ? "text-gray-900" : "text-gray-400"}
              >
                <div className="flex m-2 mt-6  ">
                  <div className="w-6 ml-1  ">
                    <img src={reports} alt="report"></img>
                  </div>
                  <div className="font-poppins font-bold ml-4">
                    <h1>Reports</h1>
                  </div>
                </div>
              </Link>
              <Link
                to="/doctor/history"
                onClick={() => setToggle("Patient_history")}
                className={
                  Toggle === "Patient_history"
                    ? "text-gray-900 "
                    : "text-gray-400"
                }
              >
                <div className="flex p-2">
                  <img
                    src={patient_history}
                    className="w-6"
                    alt="pat-history"
                  ></img>
                  <h1 className="ml-4">Patient History</h1>
                </div>
              </Link>
            </div>
          </div>
        </nav>

        <div className=" mx-auto mt-56 py-1    bg-primary  rounded font-semibold font-poppins shadow-sm hover:bg-bgsecondary w-2/5  ">
          <button className="font-bold  flex items-center" onClick={logout}>
            <img src={logoutimg} className="h-4 px-2 " alt="logout"></img>logout
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default DashboardSidebar;
