import React, { useState } from "react";

import styles from "./index.module.scss";

interface InputTaskProps {
  id: string;
  title: string;
  onDone: (title: string) => void;
  onEdited: (id: string, title: string) => void;
  onRemoved: (id: string) => void;
}

export const InputTask: React.FC<InputTaskProps> = ({
  id,
  title,
  onDone,
  onEdited,
  onRemoved,
}) => {
  const [checked, setChecked] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [value, setValue] = useState(title);

  return (
    <div className={styles.inputStyles}>
      <label className={styles.label}>
        <input
          type="checkbox"
          disabled={isEditMode}
          checked={checked}
          className={styles.inputTaskCheckbox}
          onChange={(evt) => {
            setChecked(evt.target.checked);
            if (evt.target.checked) {
              onDone(id);
            }
          }}
        />
        {isEditMode ? (
          <input
            value={value}
            onChange={(evt) => {
              setValue(evt.target.value);
            }}
            className={styles.titelEdit}
          />
        ) : (
          <h3 className={styles.taskTitel}>{title}</h3>
        )}
      </label>
      {isEditMode ? (
        <button
          className={styles.button}
          onClick={() => {
            onEdited(id, value);
            setIsEditMode(false);
          }}
        >
          save
        </button>
      ) : (
        <button
          className={styles.button}
          onClick={() => {
            setIsEditMode(true);
          }}
        >
          Edit
        </button>
      )}
      <button
        className={styles.destroed}
        onClick={() => {
          if (confirm("kill it")) {
            onRemoved(id);
          }
        }}
      >
        Destroed
      </button>
    </div>
  );
};
