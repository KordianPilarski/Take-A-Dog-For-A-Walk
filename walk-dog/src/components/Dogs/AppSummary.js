import styles from "./AppSummary.module.css";

const AppSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>An app where you can arrange to walk a dog.</h2>
      <p>
      An React app where you can arrange to walk a dog.</p>
      <p>

In app you can filter dogs list by name, description and weight. You can choose date and lenght of the walk and add it to Your Walks cart.
      </p>
    </section>
  );
};

export default AppSummary;
