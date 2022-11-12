import React, { useEffect, useState } from "react";
import styles from "./DogListWithInput.module.scss";

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
      <div>
        <select onChange={(e) => setbreedName(e.target.value)}>
          {breedList.map((breed) => {
            return <option key={breed}>{breed}</option>;
          })}
        </select>
        <button onClick={fetchDogImage}>Seach</button>
      </div>
      {dogImage && (
        <div className={styles.dogImageContent}>
          <img src={dogImage} />
        </div>
      )}
    </div>
  );
};

export default DogListWithInput;
