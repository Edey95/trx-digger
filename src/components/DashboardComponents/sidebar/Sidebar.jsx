import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { DarkModeContext } from "@/context";
import { useContext } from "react";
import { UserContext } from "@/context";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const handleLogout = async e => {
    e.preventDefault()
    localStorage.removeItem("user")    
    dispatch({ type: "LOGOUT" })
    console.log(user)
    navigate('/landing')
  }

  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Eric Ponzy</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <NavLink to="/dashboard" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </NavLink>
          <p className="title">ADMIN ONLY</p>
          <Link to="/dashboard/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Users</span>
            </li>
          </Link>
          < NavLink to="/dashboard/products" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Products</span>
            </li>
          </ NavLink>
          <li>
            <CreditCardIcon className="icon" />
            <span>Orders</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <NotificationsNoneIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <SettingsSystemDaydreamOutlinedIcon className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Investment</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Withdrawals</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Bonus</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>Referals</span>
          </li>
          <li>
            <AccountCircleOutlinedIcon className="icon" />
            <span>History</span>
          </li>
          <li>
          <NavLink onClick={handleLogout} to="/landing" style={{ textDecoration: "none" }}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </NavLink>
          </li>          
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
