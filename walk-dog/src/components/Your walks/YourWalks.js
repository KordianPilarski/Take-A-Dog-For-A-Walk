import { useContext, useState } from "react";
import Modal from "../UI/Modal";
import styles from "./YourWalks.module.css";
import Button from "../UI/Button";
import WalksContext from "../../store/walks-context";

const YourWalks = (props) => {
  const walksCtx = useContext(WalksContext);
  const walks = (
    
    <ul className={styles.walks}>
      {walksCtx.walks.map(walk => {
        return <li key={walk.id} className={styles.walk}>Dog: {walk.name} on {walk.date[0]} at {walk.date[1]} for {walk.walkLength} minutes.</li>
      })}
      {/* {[
        {
          id: "id1",
          name: "Koi",
          date: "12.02.2022",
          length: "60",
        },
      ].map((dog) => (
        <li key={dog.id} className={styles.walk}>
          Dog: {dog.name} - on {dog.date} for {dog.length} minutes.
        </li>
      ))} */}
    </ul>
  );
  return (
    <Modal onHideWalks={props.onHideWalks}>
      <Button class={styles.close} action={props.onHideWalks}>
        Close
      </Button>
      <div><b>Your Walks:</b></div>
      {walksCtx.walks.length === 0 && <p>Please add any walks.</p>}
      {walks}
      <Button class={styles.accept}>Lets walk!</Button>
    </Modal>
  );
};

export default YourWalks;
