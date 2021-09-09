import Button from "../UI/Button";
import styles from "./DogWalk.module.css";

const DogWalk = (props) => {
  
  return (
    <li className={styles.walk}>
      <span>
        Dog: {props.name} on {props.date[0]} at {props.date[1]} for{" "}
        {props.walkLength} minutes.
      </span>
      <Button class={styles.remove} action={props.onRemove}>
        -
      </Button>
    </li>
  );
};

export default DogWalk;
