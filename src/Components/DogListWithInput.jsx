import React, { useEffect, useState } from "react";
import styles from "./DogListWithInput.module.scss";
import { Link } from "react-router-dom";
const DogListWithInput = () => {
  const [breedName, setbreedName] = useState("");
  const [breedList, setBreedList] = useState([]);
  const [dogImage, setDogImage] = useState("");

  useEffect(() => {
    fetchBreedList();
  }, []);

  const fetchBreedList = async () => {
    const resBreed = await fetch("https://dog.ceo/api/breeds/list/all");
    const resBreedJson = await resBreed.json();
    const getDogKeys = Object.keys(resBreedJson.message);

    setBreedList(getDogKeys);
    setbreedName(getDogKeys[0]);
  };

  const fetchDogImage = async () => {
    const res = await fetch(
      `https://dog.ceo/api/breed/${breedName}/images/random`
    );
    const resJson = await res.json();

    setDogImage(resJson.message);
  };

  return (
    <div className={styles.wrapper}>
      <Link to="/">Back to Home</Link>
      <div className={styles.inputAndSelectWrapper}>
        <select onChange={(e) => setbreedName(e.target.value)}>
          {breedList.map((breed) => {
            return <option key={breed}>{breed}</option>;
          })}
        </select>
        <button
          onClick={fetchDogImage}
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
      <div className={styles.dogImageContent}>
        {dogImage ? (
          <img src={dogImage} />
        ) : (
          <div className={styles.imagePlaceholder}>Placeholder</div>
        )}
      </div>
    </div>
  );
};

export default DogListWithInput;
