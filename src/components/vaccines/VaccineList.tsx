import { Space, Table } from "antd";
import React from "react";
import "./VaccineList.css";

const { Column } = Table;

interface DataType {
  key: React.Key;
  name: string;
  startdate: number;
  enddate: number;
  vaccinated: number;
}

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    startdate: 2021,
    enddate: 2022,

    vaccinated: 10,
  },
  {
    key: "2",

    name: "Jim Green",
    startdate: 2021,
    enddate: 2022,

    vaccinated: 10,
  },
  {
    key: "3",

    name: "Joe Black",
    startdate: 2021,
    enddate: 2022,

    vaccinated: 10,
  },
];

function VaccineList() {
  return (
    <div className="table-wrapper">
      <h1>Vaccine List</h1>
      <Table dataSource={data}>
        <Column title="Vaccine Name" dataIndex="name" key="name" />
        <Column title="Start Date" dataIndex="startdate" key="startdate" />
        <Column title="End Date" dataIndex="enddate" key="enddate" />

        <Column
          title="Vaccinated Patients"
          dataIndex="vaccinated"
          key="vaccinated"
        />

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

export default VaccineList;
