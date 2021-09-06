import { useContext } from "react";
import styles from "./Dog.module.css";
import DogForm from "./DogForm";
import WalksContext from "../../store/walks-context";

const Dog = (props) => {
  const walksCtx = useContext(WalksContext);
  const adWalkHandler = (walk) => {
    walksCtx.addWalk({
      id: props.id,
      name: props.name,
      date: walk.date,
      walkLength: walk.walkLength,
    });
  };

  return (
    <div className={styles.dog}>
      <img
        alt={`${props.name} dog`}
        className={styles.image}
        src={props.image}
      ></img>
      <div className={styles.description}>
        <h3>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</h3>

        <div>
          <h4>About:</h4>
          <p>{props.description}</p>
          <h4>Dog info:</h4>
          <p>Height: {props.dogInfo.height}</p>
          <p>Weight: {props.dogInfo.weight}</p>
          <p>Life: {props.dogInfo.life}</p>
        </div>
      </div>
      <DogForm onAddWalk={adWalkHandler} />
    </div>
  );
};

export default Dog;
