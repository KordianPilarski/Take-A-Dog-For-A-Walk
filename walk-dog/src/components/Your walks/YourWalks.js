import { useContext } from "react";
import Modal from "../UI/Modal";
import styles from "./YourWalks.module.css";
import Button from "../UI/Button";
import WalksContext from "../../store/walks-context";
import DogWalk from "./DogWalk";

const YourWalks = (props) => {
  const walksCtx = useContext(WalksContext);
  const walkRemoveHandler = (id, date) => {
    walksCtx.removeWalk(id, date);
  }
  const walks = (
    <ul className={styles.walks}>
      {walksCtx.walks.map((walk) => (
        <DogWalk
          key={walk.id}
          id={walk.id}
          name={walk.name}
          date={walk.date}
          walkLength={walk.walkLength}
          onRemove={walkRemoveHandler.bind(null, walk.id, walk.date)}
        />
      ))}
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
      <div>
        <b>Your Walks:</b>
      </div>
      {walksCtx.walks.length === 0 && <p>Please add any walks.</p>}
      {walks}
      <Button class={styles.accept}>Lets walk!</Button>
    </Modal>
  );
};

export default YourWalks;
