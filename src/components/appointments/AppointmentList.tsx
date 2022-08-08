import { Space, Table } from "antd";
import React from "react";
import "./AppointmentList.css";

const { Column } = Table;

interface DataType {
  key: React.Key;
  patientID: number;
  name: string;
  vaccine: string;
  date: string;
}

const data: DataType[] = [
  {
    key: "1",
    patientID: 101,
    name: "John Brown",
    vaccine: "Verocell",
    date: "2021-01-01 ",
  },
  {
    key: "2",
    patientID: 102,

    name: "Jim Green",
    vaccine: "Verocell",
    date: "2021-01-01 ",
  },
  {
    key: "3",
    patientID: 103,

    name: "Joe Black",
    vaccine: "Verocell",
    date: "2021-01-01 ",
  },
];

function AppointmentList() {
  return (
    <div className="table-wrapper">
      <div>
        <h1>Appointment List</h1>
        <span>
          <a href="./appointment-calendar">Calendar View</a>
        </span>
      </div>

      <Table dataSource={data}>
        <Column title="Patient ID" dataIndex="patientID" key="patientID" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column title="Vaccine" dataIndex="vaccine" key="vaccine" />
        <Column title="Appointment Date" dataIndex="date" key="date" />

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

export default AppointmentList;
