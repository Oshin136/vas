import { Button } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        type="primary"
        onClick={() => navigate("/create")}
        htmlType="submit"
      >
        Create New PatientID
      </Button>

      <Button
        type="primary"
        onClick={() => navigate("/patientlist")}
        htmlType="submit"
      >
        Patient List
      </Button>

      <Button
        type="primary"
        onClick={() => navigate("/vaccine")}
        htmlType="submit"
      >
        Add Vaccine
      </Button>

      <Button
        type="primary"
        onClick={() => navigate("/vaccinelist")}
        htmlType="submit"
      >
        Vaccine List
      </Button>

      <Button
        type="primary"
        onClick={() => navigate("/new-appointment")}
        htmlType="submit"
      >
        New Appointment
      </Button>
    </div>
  );
}

export default Home;
