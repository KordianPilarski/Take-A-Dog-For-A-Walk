// import dogsImage from "../assets/photo-1444212477490-ca407925329e.jpg";
import dogsImage from "../../assets/photo-1444212477490-ca407925329e.jpg";
import HeaderYourWalksButton from "./HeaderYourWalksButton";
import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Take a Dog For A Walk</h1>
        <nav className={styles.navigation}>
          <a href="/#search">List of dogs</a>
          {/* <a href="/#">Quotes abuot dogs</a> */}
          <HeaderYourWalksButton onClick={props.onShowWalks} />
        </nav>
      </header>
      <div className={styles["main-image"]}>
        <img alt="three little dogs" src={dogsImage} />
      </div>
    </>
  );
};

export default Header;
