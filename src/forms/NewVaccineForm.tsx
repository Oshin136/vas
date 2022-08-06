import { DatePicker, Form, Input, Select, Checkbox, Button } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import "./Form.css";

const { Option } = Select;

function NewVaccineForm() {
  const onFinish = (values: any) => {
    console.log(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
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
            label="Vaccine Name"
            name="vaccine"
            rules={[{ required: true, message: "Please input vaccine name!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: "Please input locations!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Distribution" name="distribution">
            <Form.Item>
              <DatePicker
                style={{ marginBottom: "20px" }}
                placeholder="Start Date"
              ></DatePicker>
              <DatePicker placeholder="End Date"></DatePicker>
            </Form.Item>
          </Form.Item>

          <Form.Item label="Dose" name="dose">
            <Select>
              <Option value="single-dose">Single Dose</Option>
              <Option value="multiple-dose">Multiple Dose</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Duratiion">
            <Input placeholder="For multiple dose" />
          </Form.Item>

          <Form.Item label="Gender">
            <Checkbox onChange={onChange}>Male</Checkbox>
            <Checkbox onChange={onChange}>Female</Checkbox>
            <Checkbox onChange={onChange}>Other</Checkbox>
          </Form.Item>

          <Form.Item label="Age" rules={[{ type: "number" }]}>
            <Input />
          </Form.Item>

          <Form.Item label="Ethnicity" name="Ethnicity">
            <Checkbox onChange={onChange}>Group1</Checkbox>
            <Checkbox onChange={onChange}>Group2</Checkbox>
            <Checkbox onChange={onChange}>Group3</Checkbox>
            <Checkbox onChange={onChange}>Group4</Checkbox>
            <Checkbox onChange={onChange}>Group5</Checkbox>
            <Checkbox onChange={onChange}>Group6</Checkbox>
            <Checkbox onChange={onChange}>Group7</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
            <Button className="btn" type="primary" htmlType="submit">
              Add Vaccine
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default NewVaccineForm;
