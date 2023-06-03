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

  return (
    <div className={styles.inputStyles}>
      <label className={styles.label}>
        <input
          type="checkbox"
          checked={checked}
          className={styles.inputTaskCheckbox}
          onChange={(evt) => {
            setChecked(evt.target.checked);
            if (evt.target.checked) {
              onDone(id);
            }
          }}
        />
        <h3 className={styles.taskTitel}>{title}</h3>
      </label>
      <button className={styles.button} onClick={() => {}}>
        Edit
      </button>
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
