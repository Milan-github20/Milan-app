import React, { useState, useEffect } from "react";
import InputEdit2 from "../InputEdit2/InputEdit2";
import InputField2 from "../InputField2/InputField2";
import styles from "./InputList2.module.css";

const InputList = () => {
  const [fields, setFields] = useState(getInitalField(), []);

  function getInitalField() {
    const temp = localStorage.getItem("fields2");
    const savedFields = JSON.parse(temp);
    return savedFields || [];
  }

  useEffect(() => {
    console.log("completed");
    const temp = JSON.stringify(fields);
    localStorage.setItem("fields2", temp);
  }, [fields]);

  const addField = (field) => {
    if (!field.text || /^\s*$/.test(field.text)) {
      return;
    }

    const newFields = [field, ...fields];

    setFields(newFields);
  };

  const updateField = (fieldId, newField) => {
    if (!newField.text || /^\s*$/.test(newField.text)) {
      return;
    }

    setFields((prev) =>
      prev.map((item) => (item.id === fieldId ? newField : item))
    );
  };

  const removeField = (id) => {
    const removeArr = [...fields].filter((field) => field.id !== id);

    setFields(removeArr);
  };

  const completeField = (id) => {
    let updatedFields = fields.map((field) => {
      if (field.id === id) {
        field.isComplete = !field.isComplete;
      }
      return field;
    });

    setFields(updatedFields);
  };

  return (
    <div className={styles.inputList}>
      <InputField2 onSubmit={addField} />
      <InputEdit2
        fields={fields}
        completeField={completeField}
        removeField={removeField}
        updateField={updateField}
      />
    </div>
  );
};
export default InputList;
