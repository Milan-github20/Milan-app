import React from "react";
import InputList from "./InputList/InputList";
import styles from "./First.module.css";

const First = () => {
  return (
    <div>
      <h1 className={styles.h1}>FIRST YEAR</h1>
      <InputList />
    </div>
  );
};

export default First;
