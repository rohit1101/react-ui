import React from "react";
import { Options } from "./Options";
import styles from "./Quiz.module.css";

export class Quiz extends React.Component {
  state = {
    quiz_arr: [
      {
        question: `What is the type of  'null' ?`,
        options: ["null", "Object", "undefined", "null pointer exception 😏"],
        answer: "Object",
      },
      {
        question: `What is type of NaN?`,
        options: ["Number", "String", "undefined", "null"],
        answer: "Number",
      },
      {
        question: `Which of the following are true about let and var ?`,
        options: [
          "let is block scoped",
          "var is block scoped",
          "both var and let are function scoped",
          "none of these",
        ],
        answer: "let is block scoped",
      },
      {
        question: `Difference between '==' and '===' ?`,
        options: [
          "== only compares values & === compare values and type both",
          "== compares values and type & === compare values ",
          "All of the above",
          "none of these",
        ],
        answer: "== only compares values & === compare values and type both",
      },
      {
        question: `What is React ?`,
        options: ["Framework", "Library", "Micro-framework", "None of these"],
        answer: "library",
      },
      {
        question: `Is 0 == '0' true or false ?`,
        options: ["true", "false", "Neither", "None of these"],
        answer: "true",
      },
    ],
  };

  render() {
    const arr = [...this.state.quiz_arr];
    let i = 0;
    return (
      <div className={styles["quiz-container"]}>
        <h1>Quiz</h1>
        <div className={styles.quiz}>
          {arr.map((item) => {
            return (
              <div key={i++} className={styles["quiz-item"]}>
                <h3>
                  <span role="img" aria-label="some">
                    👉
                  </span>
                  {item.question}
                </h3>

                <Options item={item.options} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
