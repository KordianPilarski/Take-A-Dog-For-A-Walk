import styles from "./Pagination.module.css";

const Pagination = (props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalDogs / props.dogsPerPage); i++) {
    pageNumbers.push(i);
  }

  // console.log(props.totalDogs);

  return (
    <nav>
      <ul className={styles.pagination}>
        {pageNumbers.map((number) => (
          <li key={number} className={styles.item}>
            <a
              onClick={(e) => {
                e.preventDefault();
                props.paginate(number);
              }}
              href="/#"
              className={styles.link}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
