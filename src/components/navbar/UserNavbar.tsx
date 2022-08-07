import "./Navbar.css";
import { Link } from "react-router-dom";

function UserNavbar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <li className="nav-logo">VAS</li>
      </div>

      <div className="nav-right">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-item">
          <Link to="/register">Register</Link>
        </li>

        <li className="nav-item">
          <Link to="/user-appointment">Appointments</Link>
        </li>
      </div>
    </div>
  );
}

export default UserNavbar;
