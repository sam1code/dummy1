import React from "react";

import MapChart from "../MapChart";
import SimpleBarChart from "./RotatedBarChart";

const Part3 = () => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/5");
    const data = await response.json();
    setData(data?.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "35vh",
      }}
    >
      <div
        style={{
          width: "50%",
          height: "100%",
          marginTop: "-12rem",
          marginRight: "-.27rem",
        }}
      >
        <MapChart />
      </div>
      <div
        style={{
          borderLeft: "10px solid #5D6576",
          width: "35vh",
        }}
      >
        <SimpleBarChart data={data} xKey="name" yKey="pv" />
      </div>
    </div>
  );
};

export default Part3;
