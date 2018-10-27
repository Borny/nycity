import React, { Component } from "react";

class Countdown extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    // NEW YORK
    function countdown(endDate) {
      let days, hours, minutes, seconds;

      endDate = new Date(endDate).getTime();

      if (isNaN(endDate)) {
        return;
      }

      setInterval(calculate, 1000);

      function calculate() {
        let startDate = new Date();
        startDate = startDate.getTime();

        let timeRemaining = parseInt((endDate - startDate) / 1000);

        if (timeRemaining >= 0) {
          days = parseInt(timeRemaining / 86400);
          timeRemaining = timeRemaining % 86400;
          // console.log(days);

          hours = parseInt(timeRemaining / 3600);
          timeRemaining = timeRemaining % 3600;
          // console.log(hours);

          minutes = parseInt(timeRemaining / 60);
          timeRemaining = timeRemaining % 60;
          // console.log(minutes);

          seconds = parseInt(timeRemaining);
          // console.log(seconds);

          document.getElementById("days").innerHTML = parseInt(days, 10);
          document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
          document.getElementById("minutes").innerHTML = ("0" + minutes).slice(
            -2
          );
          document.getElementById("seconds").innerHTML = ("0" + seconds).slice(
            -2
          );
        } else {
          return;
        }
      }
    }

    (function() {
      countdown("10/26/2018 11:30:00 PM");
    })();
  }

  render() {
    return (
      <div className="">

        <div className="countdown countdown_ny">
        <header className="header_countdown header_ny">
          <h1>New York City
            <br />
            October 2018</h1>
        </header>
          {/* <p className="timer timer_ny">
            <span id="days" />
            Day
            <span id="hours" />
            Hours
            <span id="minutes" />
            Minutes
            <br />
            <span id="seconds" />
            Seconds
          </p> */}
        </div>
      </div>
    );
  }
}

export default Countdown;
