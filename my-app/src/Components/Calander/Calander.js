import React, { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import "./Calendar.css";
import { dayContext } from "../../context/dayContext";
import { SlClose } from "react-icons/sl";

function Calander() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const { day, setDay } = useContext(dayContext);

  return (
    <div className="dateContainer">
      <div className={`date ${day ? "active" : "hidden"} `}>
        <DateRange
          editableDateInputs={true}
          onChange={(item) => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
        />
      </div>
    </div>
  );
}

export default Calander;
