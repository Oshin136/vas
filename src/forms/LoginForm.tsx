import { Button, Form, Input } from "antd";

import { useState } from "react";
import { setAuth } from "../reducers/authSlice";
import { useDispatch } from "react-redux";

import "./Form.css";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState<string>("");
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log(values);
    if (values.username === "oshin" && values.password === "gansi") {
      dispatch(setAuth(true));
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      setErrMsg("Wrong email or password");
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-center">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 7 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <div style={{ color: "red", marginLeft: "34%", marginBottom: "20px" }}>
          {errMsg}
        </div>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default LoginForm;
