import styles from "./DogForm.module.css";
import DateTimePicker from "react-datetime-picker";
import React, { useState } from "react";
import Button from "../UI/Button";

const DogForm = (props) => {
  //https://www.npmjs.com/package/react-datetime-picker used
  const [date, setDate] = useState(new Date());
  const [walkLength, setWalkLength] = useState(30);

  const handleWalkLengthChange = (e) => {
    setWalkLength(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const formatedDate = [
      `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
      `${date.getHours()}:${(date.getMinutes()<10?'0':'') + date.getMinutes()}`,
    ];

    const enteredData = { date: formatedDate, walkLength: walkLength };
    // console.log(enteredData)
    props.onAddWalk(enteredData)
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.date}>
        <label htmlFor="datePicker">Choose your date:</label>
        <DateTimePicker
          className={styles.datePicker}
          value={date}
          onChange={setDate}
          disableClock={true}
        />
        <label htmlFor="meetingLength">Meeting length: </label>
        <select
          className={styles.select}
          name="meetingLength"
          id="meetingLength"
          onChange={handleWalkLengthChange}
        >
          <option value="30">30 min</option>
          <option value="60">60 min</option>
          <option value="120">120 min</option>
        </select>
      </div>
      <Button type="submit" class={styles['add-walk']}>Add a walk</Button>
    </form>
  );
};

export default DogForm;
