import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import DateRangePicker from "react-bootstrap-daterangepicker";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-daterangepicker/daterangepicker.css";

const Launches = () => {
  return (
    <div id="dateRangePicker">
      <DateRangePicker initialSettings={{ startDate: new Date(), endDate: "" }}>
        <button>Open</button>
      </DateRangePicker>
      <div id="launchDetail">
        <img src="" alt="" />
        <section>
          <h2>launch.name</h2>
          <h2>launch.date_local</h2>
        </section>
        <img src="" alt="launch.success" />
        <p>launch details</p>
        <section id="launchList">
          <h2>ships name</h2>
          <h2>crew members</h2>
          {/*paginate this list */}
        </section>
      </div>
    </div>
  );
};

export default Launches;
