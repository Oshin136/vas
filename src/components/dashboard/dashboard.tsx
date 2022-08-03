import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

function DashBoard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard-container">
      <h1>VAS</h1>
      <Button
        type="primary"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
      <Button
        type="primary"
        onClick={() => {
          navigate("/register");
        }}
      >
        Register
      </Button>
    </div>
  );
}

export default DashBoard;
