import React, { Component } from "react";
import Slide from "react-reveal/Slide";

export default class TimeUntil extends Component {
  state = {
    deadline: "Dec, 16, 2019",
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  getTimeUntil() {
    const now = new Date();
    const time = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const timecheck = Date.parse(time) - Date.parse(new Date());
    if (timecheck < 0) {
    } else {
      const seconds = Math.floor((timecheck / 1000) % 60);
      const minutes = Math.floor((timecheck / 1000 / 60) % 60);
      const hours = Math.floor((timecheck / (1000 * 60 * 60)) % 24);
      const days = Math.floor(timecheck / (1000 * 60 * 60 * 24));
      this.setState({
        days,
        hours,
        minutes,
        seconds
      });
    }
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }
  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event Starts in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">hs</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">Min</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">Sec</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
