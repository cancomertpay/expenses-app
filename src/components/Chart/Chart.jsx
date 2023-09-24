import React from "react";
import "./Chart.css";
import ChartBar from "./ChartBar";

function Chart({ dataPoints }) {
  const dataPointsValues = dataPoints.map((item) => item.value);
  const totalMax = Math.max(...dataPointsValues);
  return (
    <div className="chart">
      {dataPoints.map((item) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMax}
          label={item.label}
        />
      ))}
    </div>
  );
}

export default Chart;
