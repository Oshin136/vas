import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log(isLoggedIn);
  const onFinish = (values: any) => {
    // console.log(values);
    navigate("/create");
  };

  return (
    <div>
      {/* <h1>Hello</h1> */}
      <Form onFinish={onFinish}>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Create New PatientID
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Home;
