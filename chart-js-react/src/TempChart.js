import React, { Component } from "react";
import * as d3 from "d3";
// import { Line } from "react-chartjs-2";

export class TempChart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const data = [12, 5, 6, 6, 9, 10];
    const svg = d3
      .select("body")
      .append("svg")
      .attr("width", 700)
      .attr("height", 300);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => 300 - 10 * d)
      .attr("width", 25)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "rgba(255, 0, 255,0.75)");
  }

  render() {
    return (
      <div className="TempChart">
        <h1>TempChart Goes Here</h1>
      </div>
    );
  }
}

export default TempChart;
