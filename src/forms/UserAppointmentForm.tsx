import { Form, Input, Button, DatePicker, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./Form.css";

function UserAppointmentForm() {
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values: any) => {
    console.log(values);
  };
  const onChange = (e: CheckboxChangeEvent) => {
    console.log(`checked = ${e.target.checked}`);
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
            label="Patient ID"
            name="patientid"
            rules={[{ required: true, message: "Please input patient ID!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Full Name"
            name="fullname"
            rules={[{ required: true, message: "Please input full name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please input your age!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Gender">
            <Checkbox onChange={onChange}>Male</Checkbox>
            <Checkbox onChange={onChange}>Female</Checkbox>
            <Checkbox onChange={onChange}>Other</Checkbox>
          </Form.Item>

          <Form.Item label="Contact" name="contact">
            <Input />
          </Form.Item>

          <Form.Item
            label="Vaccine"
            name="vaccine"
            rules={[{ required: true, message: "Please input vaccine!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Site Location"
            name="location"
            rules={[{ required: true, message: "Please input location!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Appointment Date"
            name="date"
            rules={[{ required: true, message: "Please input location!" }]}
          >
            <DatePicker></DatePicker>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button className="btn" type="primary" htmlType="submit">
              Add Appointment
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default UserAppointmentForm;
