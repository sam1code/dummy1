import React from "react";
import Part1 from "./parts/Part1";
import Part2 from "./parts/Part2";
import Part3 from "./parts/Part3";

function App() {
  return (
    <div
      style={{
        border: "10px solid #5D6576",
        backgroundColor: "#071228",
        color: "#fff",
        height: "97.9vh",
        margin: "-.46rem",
        padding: "0",
        overflow: "hidden",
      }}
    >
      <Part1 />
      <Part2 />
      <Part3 />
    </div>
  );
}

export default App;
