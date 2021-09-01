import styles from "./Dog.module.css";

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
          <h4>About:</h4> {props.description}
        </div>
        <div>
          <h4>Dog info:</h4>
          <p>Height: {props.dogInfo.height}</p>
          <p>Weight: {props.dogInfo.weight}</p>
          <p>Life: {props.dogInfo.life}</p>
        </div>
      </div>
      <div className={styles.form}>Form</div>
    </div>
  );
};

export default Dog;
