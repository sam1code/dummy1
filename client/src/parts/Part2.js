import React, { useEffect } from "react";

import {
  CartesianGrid,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Line,
  Legend,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const Part2 = () => {
  const [data, setData] = React.useState([]);
  const [dataForB3, setDataForB3] = React.useState([]);

  const getData = async () => {
    const response = await fetch("http://localhost:8080/2");
    const resp = await fetch("http://localhost:8080/3");
    const data = await response.json();
    const dataForB3 = await resp.json();
    setData(data?.data);
    setDataForB3(dataForB3?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        borderTop: "10px solid #5D6576",
        borderBottom: "10px solid #5D6576",
        display: "flex",
        height: "33vh",
      }}
    >
      <div
        style={{
          borderRight: "5px solid #5D6576",
          height: "100%",
          width: "50%",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="Sessions"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="BonusRate" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div
        style={{
          width: "50%",

          borderLeft: "5px solid #5D6576",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={300}
            data={dataForB3}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Sessions" fill="#8884d8" />
            <Bar dataKey="BonusRate" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Part2;
