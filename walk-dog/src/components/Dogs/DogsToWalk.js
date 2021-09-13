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
  const [filteredDogs, setFilteredDogs] = useState([]);
  const [searchDog, setSearchDog] = useState("");

  useEffect(() => {
    const getAPIDogs = async () => {
      setLoading(true);
      const dogs = await getDogsData();
      setDogsData(dogs.data);
      //   console.log(DogsData);
      setFilteredDogs(dogs.data);
      setLoading(false);
    };
    getAPIDogs();
  }, []);

  const handleSearchChange = (e) => {
    setSearchDog({ input: e.target.id, val: e.target.value });
  };
  // console.log(searchDog);

  useEffect(() => {
    // console.log("effect")
    const filterDogs = DogsData.filter((dog) => {
      if (searchDog === "") {
        return dog;
      } else if (searchDog.input === "name") {
        return dog.breedName
          .toLowerCase()
          .includes(searchDog.val.toLowerCase());
      } else if (searchDog.input === "description") {
        return dog.description
          .toLowerCase()
          .includes(searchDog.val.toLowerCase());
      } else if (searchDog.input === "weight") {
        const weights = dog.dogInfo.weight.match(/(\d[\d]*)/g);
        if (weights) {
          if(+searchDog.val === 0){
            setFilteredDogs(DogsData)
          } else {
            return +searchDog.val >= +weights[0] && +searchDog.val <= +weights[1];

          }
        } else {
          setFilteredDogs(DogsData);
        }
      }
      return dog;
    });
    setFilteredDogs(filterDogs);

    return () => {
      setFilteredDogs(DogsData);
      setCurrentPage(1);
    };
  }, [searchDog, DogsData]);

  const idOfLastDog = currentPage * dogsPerPage;
  const idOfFirstDog = idOfLastDog - dogsPerPage;
  const currentDogs = filteredDogs.slice(idOfFirstDog, idOfLastDog);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <Search onSearchChange={handleSearchChange} />
        <Pagination
          totalDogs={filteredDogs.length}
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
