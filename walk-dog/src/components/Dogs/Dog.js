import styles from "./Dog.module.css";
import DogForm from "./DogForm";

const Dog = (props) => {
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
      <DogForm />
    </div>
  );
};

export default Dog;
