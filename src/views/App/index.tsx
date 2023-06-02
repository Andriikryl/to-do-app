import React from "react";
import { useToDoStore } from "../../data/stores/useToDoStore";
import styles from "./index.module.scss";
import { InputPlus } from "../components/InputPlus";

export const App: React.FC = () => {
  const [tasks, createTask, updateTask, removeTask] = useToDoStore((state) => [
    state.tasks,
    state.createTask,
    state.updateTask,
    state.removeTask,
  ]);

  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>Hell app</h1>
      <section className={styles.articleSection}>
        <InputPlus
          onAdd={(title) => {
            if (title) {
              createTask(title);
            }
          }}
        />
      </section>
      <section className={styles.articleSection}>
        {!tasks.length && <p className={styles.articl}>There is no live here</p>}
      </section>
    </article>
  );
};
