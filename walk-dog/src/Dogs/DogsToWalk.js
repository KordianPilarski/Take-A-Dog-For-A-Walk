import { useEffect, useState } from "react";
import Wrapper from "../UI/Wrapper";
import { getDogsData } from "../api";
import Dog from "./Dog";
import styles from "./DogsToWalk.module.css";
import Search from "./Search/Search";

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

  const dogsList = DogsData.slice(0, 10).map((dog) => (
    <Dog
      key={dog.id}
      image={dog.image}
      name={dog.breedName}
      description={dog.description}
      dogInfo={dog.dogInfo}
    />
  ));

  return (
    <section className={styles.dogsToWalk}>
      <Wrapper>
          <Search />
        <ul>{dogsList}</ul>
      </Wrapper>
    </section>
  );
};

export default DogsToWalk;
