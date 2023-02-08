import React, { useEffect, useState } from "react";
import "../App.css";

// const dataForTB1 = [
//   {
//     date: "Today",
//     session: {
//       data: "2586",
//       aro: 1,
//     },
//     newUsers: {
//       data: "2080",
//       aro: 1,
//     },
//     bonusRate: {
//       data: "57.4",
//       aro: 1,
//     },
//     averageSessionDuration: {
//       data: "A126.5 sec",
//       aro: 1,
//     },
//     goal1: {
//       data: "37",
//       aro: 1,
//     },
//     goal1cvr: {
//       data: "1.4",
//       aro: 1,
//     },
//   },
//   {
//     date: "This Week",
//     session: {
//       data: "2586",
//       aro: 1,
//     },
//     newUsers: {
//       data: "2080",
//       aro: 1,
//     },
//     bonusRate: {
//       data: "57.4",
//       aro: 0,
//     },
//     averageSessionDuration: {
//       data: "A126.5 sec",
//       aro: 0,
//     },
//     goal1: {
//       data: "37",
//       aro: 0,
//     },
//     goal1cvr: {
//       data: "1.4",
//       aro: 0,
//     },
//   },
//   {
//     date: "This Month",
//     session: {
//       data: "2586",
//       aro: 0,
//     },
//     newUsers: {
//       data: "2080",
//       aro: 0,
//     },
//     bonusRate: {
//       data: "57.4",
//       aro: 0,
//     },
//     averageSessionDuration: {
//       data: "A126.5 sec",
//       aro: 0,
//     },
//     goal1: {
//       data: "37",
//       aro: 1,
//     },
//     goal1cvr: {
//       data: "1.4",
//       aro: 1,
//     },
//   },
// ];

const Part1 = () => {
  const [dataForTB1, setDataForTB1] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:8080/1")
      .then((res) => res.json())
      .then((data) => {
        setDataForTB1(data?.data);
      });
  };
  return (
    <div
      style={{
        height: "28vh",
      }}
    >
      <table>
        <tr>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "82vw",
              marginLeft: "10vw",
              paddingTop: "4vh",
              paddingBottom: "2vh",
              paddingRight: "1vw",
              paddingLeft: "1vw",
              borderBottom: "1px solid #2B2A3E",
            }}
          >
            <td>Session</td>
            <td>New Users</td>
            <td>Bonus Rate</td>
            <td>Average Session Duration</td>
            <td>New Users</td>
            <td>New Users</td>
          </div>
        </tr>
        {dataForTB1.map((item, index) => {
          return (
            <tr>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "4vw",
                }}
              >
                {item.date}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "82vw",
                    marginLeft:
                      item.date === "Today"
                        ? "4vw"
                        : item.date === "This Week"
                        ? "2.4vw"
                        : "1.8vw",
                    paddingTop: "2vh",
                    paddingBottom: "2vh",
                    paddingRight: "1vw",
                    paddingLeft: "1vw",
                    borderBottom: "1px solid #2B2A3E",
                  }}
                >
                  <TD data={item.session} />
                  <TD data={item.newUsers} />
                  <TD data={item.bonusRate} rest="%" />
                  <TD data={item.averageSessionDuration} rest="sec" />
                  <TD data={item.goal1} />
                  <TD data={item.goal1cvr} rest="%" />
                </div>
              </div>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const TD = ({ data, rest }) => {
  return (
    <td
      style={{
        display: "flex",
        alignContent: "center",
      }}
    >
      {data.data}
      {rest}&nbsp;
      <div class={data.aro === 1 ? "arrow-up" : "arrow-down"} />
    </td>
  );
};

export default Part1;
