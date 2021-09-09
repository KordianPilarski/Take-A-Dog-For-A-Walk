import { useEffect, useState } from "react";
import Wrapper from "../UI/Wrapper";
import { getDogsData } from "../../assets/api";
import Dog from "./Dog";
import styles from "./DogsToWalk.module.css";
import Search from "./Search/Search";
import Pagination from "./Search/Pagination";

const DogsToWalk = () => {
  const [DogsData, setDogsData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dogsPerPage] = useState(9);

  useEffect(() => {
    const getAPIDogs = async () => {
      setLoading(true);
      const dogs = await getDogsData();
      setDogsData(dogs.data);
      //   console.log(DogsData);
      setLoading(false);
    };
    getAPIDogs();
  }, []);

  const idOfLastDog = currentPage * dogsPerPage;
  const idOfFirstDog = idOfLastDog - dogsPerPage;
  const currentDogs = DogsData.slice(idOfFirstDog, idOfLastDog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const dogsList = currentDogs.map((dog) => (
    <Dog
      id={dog.id}
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
        <Pagination
          totalDogs={DogsData.length}
          dogsPerPage={dogsPerPage}
          paginate={paginate}
        />
        {loading ? <h3> Dogs are loading, please wait a second.</h3> : ""}
        <ul>{dogsList}</ul>
      </Wrapper>
    </section>
  );
};

export default DogsToWalk;
