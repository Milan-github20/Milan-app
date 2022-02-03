import React, { useState } from "react";
import styles from "./InputField4.module.css";
import { v4 as uuidv4 } from "uuid";

const InputField = (props) => {
  const [date, setDate] = useState("");
  const [subject, setSubject] = useState("");
  const [professor, setProfessor] = useState("");
  const [name, setName] = useState("");
  const [index, setIndex] = useState("");
  const [rating, setRating] = useState("");

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeSubject = (e) => {
    setSubject(e.target.value);
  };
  const handleChangeProfessor = (e) => {
    setProfessor(e.target.value);
  };
  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeIndex = (e) => {
    setIndex(e.target.value);
  };
  const handleChangeRating = (e) => {
    setRating(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: uuidv4(),
      date: date,
      subject: subject,
      professor: professor,
      name: name,
      index: index,
      rating: rating,
      text: subject,
    });

    setDate("");
    setSubject("");
    setProfessor("");
    setName("");
    setIndex("");
    setRating("");
  };

  return (
    <form className={styles.firstForm} onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Add date"
        value={date}
        name="text"
        className={styles.firstInput}
        required
        onChange={handleChangeDate}
      />
      <input
        type="text"
        placeholder="Add subject"
        value={subject}
        name="text"
        className={styles.firstInput}
        required
        onChange={handleChangeSubject}
      />
      <input
        type="text"
        placeholder="Add professor"
        value={professor}
        name="text"
        className={styles.firstInput}
        required
        onChange={handleChangeProfessor}
      />
      <input
        type="text"
        placeholder="Add name and surname"
        value={name}
        name="text"
        className={styles.firstInput}
        required
        onChange={handleChangeName}
      />
      <input
        type="text"
        placeholder="Add index"
        value={index}
        name="text"
        className={styles.firstInput}
        required
        onChange={handleChangeIndex}
      />
      <input
        type="number"
        placeholder="Add rating"
        value={rating}
        name="text"
        className={styles.firstInput}
        required
        min={0}
        max={10}
        onChange={handleChangeRating}
      />
      <button className={styles.firstButton}>SUBMIT</button>
    </form>
  );
};

export default InputField;
