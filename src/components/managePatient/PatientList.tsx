import { Space, Table } from "antd";
import React from "react";
import "./PatientList.css";

const { Column } = Table;

interface DataType {
  key: React.Key;
  patientID: number;
  name: string;
  age: number;
  address: string;
}

const data: DataType[] = [
  {
    key: "1",
    patientID: 101,
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    patientID: 102,

    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    patientID: 103,

    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

function PatientList() {
  return (
    <div className="table-wrapper">
      <h1>Patient List</h1>
      <Table dataSource={data}>
        <Column title="Patient ID" dataIndex="patientID" key="patientID" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Age" dataIndex="age" key="age" />
        <Column title="Address" dataIndex="address" key="address" />

        <Column
          title=" "
          key="action"
          render={(_: any, record: DataType) => (
            <Space size="middle">
              <a style={{ color: "green" }}>Edit</a>
              <a style={{ color: "red" }}>Delete</a>
            </Space>
          )}
        />
      </Table>
    </div>
  );
}

export default PatientList;
