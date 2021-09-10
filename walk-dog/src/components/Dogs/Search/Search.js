import Input from "../../UI/Input";
import styles from "./Search.module.css";

const Search = (props) => {
  return (
    <form id="search" className={styles.search}>
      <h2>Find a dog by:</h2>
      <div className={styles.options}>
        <div className={styles.category}>
          <Input
            label="Name"
            input={{
              id: "name",
              type: "text",
            }}
            handleChange={props.onSearchChange}
          />
        </div>
        <div className={styles.category}>
          <Input
            label="Description"
            input={{
              id: "description",
              type: "text",
            }}
            handleChange={props.onSearchChange}
          />
        </div>
        <div className={styles.category}>
          <Input
            label="Weight"
            input={{
              id: "weight",
              type: "number",
            }}
            handleChange={props.onSearchChange}
          />
        </div>
      </div>
    </form>
  );
};

export default Search;
