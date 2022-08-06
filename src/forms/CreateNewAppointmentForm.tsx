import { Form, Input, Button, DatePicker, Select, Checkbox } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./Form.css";

const { Option } = Select;

function CreateNewAppointmentForm() {
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
            label="Patient Name"
            name="patinet-name"
            rules={[{ required: true, message: "Please input patient  name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Gender">
            <Checkbox onChange={onChange}>Male</Checkbox>
            <Checkbox onChange={onChange}>Female</Checkbox>
            <Checkbox onChange={onChange}>Other</Checkbox>
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

          <Form.Item label="Dose Type" name="dose">
            <Select>
              <Option value="single-dose">Single Dose</Option>
              <Option value="multiple-dose">Multiple Dose</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Service" name="service">
            <Input />
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

export default CreateNewAppointmentForm;
