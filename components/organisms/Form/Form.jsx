import React, { useRef } from "react";
import styles from "./Form.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../atoms/Button/Button";
import Input from "@/components/atoms/AddPost/Input/Input";
import Textarea from "@/components/atoms/AddPost/Textarea/Textarea";
import Error from "@/components/atoms/Error/Error";

const Form = ({ getskycapersData }) => {
  const [skycaperTitle, setSkycaperTitle] = useState("");
  const [skycaperLocation, setSkycaperLocation] = useState("");
  const [skycaperYearbuild, setSkycaperYearbuild] = useState("");
  const [skycaperBuildingheight, setSkycaperBuildingheight] = useState("");
  const [skycaperDescription, setSkycaperDescription] = useState("");
  const [skycaperPhoto, setSkycaperPhoto] = useState("");
  const [skycaperNumberfloors, setSkycaperNumberfloors] = useState("");
  const [error, setError] = useState(null);

  const titleRef = useRef(false);
  const locationRef = useRef(false);
  const yearBuildRef = useRef(false);
  const buildingHeightRef = useRef(false);
  const floorsRef = useRef(false);
  const descriptionRef = useRef(false);
  const validateInputs = () => {
    // Focus on the first input that is empty
    if (!skycaperTitle) {
      titleRef.current.focus();
      setError("Please fill title");
      return false;
    } else if (!skycaperLocation) {
      locationRef.current.focus();
      setError("Please fill location");
      return false;
    } else if (!skycaperYearbuild) {
      yearBuildRef.current.focus();
      setError("Please fill Year build");
      return false;
    } else if (!skycaperBuildingheight) {
      setError("Please fill building height");
      buildingHeightRef.current.focus();
      return false;
    } else if (!skycaperNumberfloors) {
      floorsRef.current.focus();
      setError("Please fill number floors");
      return false;
    } else if (!skycaperDescription) {
      setError("Please fill description");
      descriptionRef.current.focus();
      return false;
    } else if (!skycaperPhoto) {
      setError("Image field is empty but you can continue. Added new skycaper");
      return true;
    } else {
      setError("Added new skycaper");
      return true;
    }
  };

  const insertSkycaper = async () => {
    const isValid = validateInputs();
    if (isValid) {
      const newSkycaper = {
        title: skycaperTitle,
        location: skycaperLocation,
        years_build: skycaperYearbuild,
        building_height: skycaperBuildingheight,
        numbers_floors: skycaperNumberfloors,
        description: skycaperDescription,
        photo: skycaperPhoto,
      };
      console.log(newSkycaper);
      const response = await axios.post(
        "https://656599ffeb8bb4b70ef1ebb4.mockapi.io/skyscrapers",
        newSkycaper
      );
      if (response.status === 201) {
        getskycapersData();
        setSkycaperTitle("");
        setSkycaperLocation("");
        setSkycaperYearbuild("");
        setSkycaperPhoto("");
        setSkycaperDescription("");
        setSkycaperBuildingheight("");
        setSkycaperNumberfloors("");
      }
    } else {
      console.log("Fill in all inputs.");
    }
  };
  return (
    <div className={styles.form}>
      <Input
        ref={titleRef}
        placeholder="Title"
        value={skycaperTitle}
        setValue={setSkycaperTitle}
      />
      <Input
        ref={locationRef}
        placeholder="Location"
        value={skycaperLocation}
        setValue={setSkycaperLocation}
      />
      <Input
        ref={yearBuildRef}
        placeholder="Year build"
        value={skycaperYearbuild}
        setValue={setSkycaperYearbuild}
      />
      <Input
        ref={buildingHeightRef}
        placeholder="Building height"
        value={skycaperBuildingheight}
        setValue={setSkycaperBuildingheight}
      />
      <Input
        ref={floorsRef}
        placeholder="Number floors"
        value={skycaperNumberfloors}
        setValue={setSkycaperNumberfloors}
      />
      <Input
        placeholder="Photo"
        value={skycaperPhoto}
        setValue={setSkycaperPhoto}
      />

      <Textarea
        value={skycaperDescription}
        setValue={setSkycaperDescription}
        ref={descriptionRef}
      />
      <Button onClick={insertSkycaper} text="Add Skycapper" />
      <Error error={error} />
    </div>
  );
};

export default Form;
