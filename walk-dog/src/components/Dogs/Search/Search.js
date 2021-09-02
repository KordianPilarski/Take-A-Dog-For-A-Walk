import Input from "../../UI/Input";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.search}>
      <h2>Find a dog by:</h2>
      <div className={styles.options}>
        <div className={styles.category}>
          <Input
            label="Name"
            input={{
              id: "name",
              type: "text",
              placeholder: "enter name",
            }}
          />
        </div>
        <div className={styles.category}>
          <Input
            label="Description"
            input={{
              id: "description",
              type: "text",
            }}
          />
        </div>
        <div className={styles.category}>
          <Input
            label="Weight"
            input={{
              id: "weight",
              type: "text",
              placeholder: "in pounds",
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
