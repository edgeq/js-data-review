import React, { Component } from "react";
import BasicChart from "./BasicChart";
import TempChart from "./TempChart";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getData = this.getData.bind(this);
  }
  async getData() {
    await fetch("https://jsonplaceholder.typicode.com/posts?limit=10")
      .then(res => res.json())
      .then(data => console.log(data));
  }
  componentDidMount() {
    this.getData();
  }
  render() {
    return (
      <div className="App">
        <BasicChart />
        <TempChart />
      </div>
    );
  }
}
