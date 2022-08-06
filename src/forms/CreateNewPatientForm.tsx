import { Button, Input, Form, DatePicker, Select, Upload } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import "./Form.css";

const { Option } = Select;

const genderOption = ["male", "female", "other"];
const provinceOption = [
  "Province1",
  "Province2",
  "Province3",
  "Province4",
  "Province5",
  "Province6",
  "Province7",
];

function CreateNewPatientForm() {
  const [errMsg, setErrMsg] = useState<string>("");

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    console.log(values);
    navigate("/home");
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
            name="firstname"
            rules={[
              { required: true, message: "Please input your firstname!" },
            ]}
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Please input your lastname!" }]}
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            rules={[
              { required: true, message: "Please input your birthdate!" },
            ]}
          >
            <DatePicker placeholder="Select Your Birthday" />
          </Form.Item>

          <Form.Item name="ethnicity">
            <Input placeholder="Ethnicity" />
          </Form.Item>

          <Form.Item name="gender" rules={[{ required: true }]}>
            <Select placeholder="Select your gender" allowClear>
              {genderOption.map((opt) => (
                <Option value={opt}>{opt}</Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item label="Address">
            <Input.Group compact>
              <Form.Item
                name={["address", "province"]}
                noStyle
                rules={[{ required: true, message: "Province is required" }]}
              >
                <Select placeholder="Select province">
                  {provinceOption.map((opt) => (
                    <Option value={opt}>{opt}</Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item
                name={["address", "street"]}
                noStyle
                rules={[{ required: true, message: "Street is required" }]}
              >
                <Input style={{ marginTop: "20px" }} placeholder="Input city" />

                <Input
                  style={{ marginTop: "20px" }}
                  placeholder="Input street"
                />
              </Form.Item>
            </Input.Group>
          </Form.Item>

          <Form.Item
            label="Payment Information"
            name="paymentinfo"
            rules={[
              {
                required: true,
                message: "Please input the payment information",
              },
            ]}
          >
            <Input placeholder="Insurance ID" />

            <Input style={{ marginTop: "20px" }} placeholder="Member ID" />
            <Input
              style={{ marginTop: "20px" }}
              placeholder="Insurance Provider"
            />
          </Form.Item>

          <Form.Item
            label="Upload Your Document"
            rules={[{ required: true, message: "Please upload your document" }]}
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default CreateNewPatientForm;
