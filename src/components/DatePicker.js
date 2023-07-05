import React, { useState, useEffect } from "react";

function DatePicker(props) {
  const { setDate } = props;
  const dateHandler = (e) => {
    setDate(e.target.value);
  };
  return (
    <div>
      <input type="date" id="date" name="date" onChange={dateHandler} />{" "}
    </div>
  );
}

export default DatePicker;
