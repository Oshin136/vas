import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Form.css";

function UserRegisterForm() {
  const navigate = useNavigate();
  const [errMsg, setErrMsg] = useState<string>("");

  const onFinish = (values: any) => {
    if (values.password != values.confirmpassword) {
      setErrMsg("Password do not match");
    } else {
      navigate("/login");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-center">
      <div className="form-wrapper">
        <Form
          name="basic"
          labelCol={{ span: 0 }}
          wrapperCol={{ span: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Username" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                // required: true, message: "Please input your email!"
              },
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Enter your password" />
          </Form.Item>

          <Form.Item name="confirmpassword" rules={[{ required: true }]}>
            <Input placeholder="Confirm Password" />
          </Form.Item>
          <div style={{ color: "red", marginBottom: "15px" }}>{errMsg}</div>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button className="btn" type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default UserRegisterForm;
