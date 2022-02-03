import React, { useState, useEffect } from "react";
import InputEdit4 from "../InputEdit4/InputEdit4";
import InputField4 from "../InputField4/InputField4";
import styles from "./InputList4.module.css";

const InputList = () => {
  const [fields, setFields] = useState(getInitalField(), []);

  function getInitalField() {
    const temp = localStorage.getItem("fields4");
    const savedFields = JSON.parse(temp);
    return savedFields || [];
  }

  useEffect(() => {
    console.log("completed");
    const temp = JSON.stringify(fields);
    localStorage.setItem("fields4", temp);
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
      <InputField4 onSubmit={addField} />
      <InputEdit4
        fields={fields}
        completeField={completeField}
        removeField={removeField}
        updateField={updateField}
      />
    </div>
  );
};
export default InputList;
