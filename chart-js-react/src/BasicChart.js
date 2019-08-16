import React, { Component } from "react";
import { Line } from "react-chartjs-2";

export class BasicChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [
          {
            label: "Videos Made",
            backgroundColor: "rgba(255, 0, 255, 0.75)",
            data: [4, 5, 5, 1, 10]
          },
          {
            label: "Subscriptions",
            backgroundColor: "rgba(0, 255, 0, 0.75)",
            data: [14, 15, 15, 21, 30]
          }
        ]
      }
    };
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext("2d");
    console.log(ctx);
    const gradient = ctx.createLinearGradient(0, 0, 600, 550);
    gradient.addColorStop(0, color);
    gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
    return gradient;
  };

  getChartData = canvas => {
    const data = this.state.data;
    if (data.datasets) {
      let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
      data.datasets.forEach((set, i) => {
        set.backgroundColor = this.setGradientColor(canvas, colors[i]);
        set.borderColor = "white";
        set.borderWidth = 2;
      });
    }
    return data;
  };

  render() {
    return (
      <div
        className="BasicChart"
        style={{ position: "relative", width: 600, height: 550 }}
      >
        <h1>BasicChart JS </h1>
        <Line
          options={{
            responsive: true
          }}
          data={this.getChartData}
        />
      </div>
    );
  }
}

export default BasicChart;
