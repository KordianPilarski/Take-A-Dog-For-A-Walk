import { useEffect, useState } from "react";
import { getDogsData } from "./api";
import styles from "./DogsToWalk.module.css";

const DogsToWalk = () => {
  const [DogsData, setDogsData] = useState([]);

  useEffect(() => {
    const getAPIDogs = async () => {
      const dogs = await getDogsData();
      setDogsData(dogs.data);
    //   console.log(DogsData);
    };
    getAPIDogs();
  }, []);

  return (
    <section className={styles.dogsToWalk}>
      <ul>
        {DogsData.slice(110).map((dog) => (
          <li key={dog.id}>{dog.breedName}</li>
        ))}
      </ul>
    </section>
  );
};

export default DogsToWalk;
