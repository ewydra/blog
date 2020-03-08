import React, { Component } from "react";
import { format } from "date-fns";

class Clock extends Component {
  state = {
    timestamp: Date.now()
  }

  t = null;

  componentDidMount() {
    this.t = setInterval(() => this.setState({ timestamp: Date.now() }), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.t)
  }

  render() {
    const formattedHour = format(this.state.timestamp, "H:mm:ss");
    return (
      <div className="clock">{formattedHour}</div>
    )
  }
}

export default Clock;
