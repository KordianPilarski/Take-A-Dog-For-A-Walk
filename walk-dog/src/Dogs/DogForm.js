import styles from "./DogForm.module.css";
import DateTimePicker from "react-datetime-picker";
import React, { useState } from "react";
import Button from "../UI/Button";

const DogForm = () => {
    //https://www.npmjs.com/package/react-datetime-picker used
  const [date, setDate] = useState(new Date());
  return (
    <form className={styles.form}>
      <div className={styles.date}>
        <label htmlFor="datePicker">Choose your date:</label>
        <DateTimePicker className={styles.datePicker} value={date} onChange={setDate} disableClock={true}/>
        <label htmlFor="meetingLength">Meeting length: </label>
        <select className={styles.select} name="meetingLength" id="meetingLength">
            <option value='30'>30 min</option>
            <option value='60'>60 min</option>
            <option value='120'>120 min</option>
        </select>
      </div>
      < Button type="submit">Add a walk</Button>
    </form>
  );
};

export default DogForm;
