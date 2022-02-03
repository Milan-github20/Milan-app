import React, { useState } from "react";
import styles from "./InputEdit3.module.css";
import InputField3 from "../InputField3/InputField3";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

const InputEdit = ({ fields, completeField, removeField, updateField }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateField(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <InputField3 edit={edit} onSubmit={submitUpdate} />;
  }

  return fields.map((field, index) => (
    <div
      className={styles.inputEdit}
      //   className={field.isComplete ? "field-row complete" : "field-row"}
      key={index}
    >
      <div
        key={field.id}
        className={styles.input}
        onClick={() => completeField(field.id)}
      >
        <div className={styles.date}>{field.date}</div>
        <div className={styles.subject}>{field.subject}</div>
        <div className={styles.professor}>{field.professor}</div>
        <div className={styles.name}>{field.name}</div>
        <div className={styles.index}>{field.index}</div>
        <div className={styles.rating}>{field.rating}</div>
      </div>
      <div className={styles.icons}>
        <RiCloseCircleLine
          onClick={() => removeField(field.id)}
          className={styles.deleteField}
        ></RiCloseCircleLine>
        <TiEdit
          onClick={() => setEdit({ id: field.id, value: field.text })}
          className={styles.editField}
        />
      </div>
    </div>
  ));
};

export default InputEdit;
