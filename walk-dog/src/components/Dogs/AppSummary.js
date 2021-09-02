import styles from "./AppSummary.module.css";

const AppSummary = () => {
  return (
    <section className={styles.summary}>
      <h2>An app where you can arrange to walk a dog.</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a esetting, remaining
        essentially unchanged.
      </p>
    </section>
  );
};

export default AppSummary;
