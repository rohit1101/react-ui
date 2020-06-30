import React from "react";
import { Options } from "./Options";
import styles from "./Quiz.module.css";
export class Quiz extends React.Component {
  state = {
    quiz_arr: [
      {
        question: `What is the type of  'null' ?`,
        options: ["null", "Object", "undefined", "null pointer exception"],
        answer: "Object",
      },
      {
        question: `What is NaN? What is its type?`,
        options: ["Number", "String", "undefined", "null"],
        answer: "Number",
      },
    ],
  };

  render() {
    const arr = [...this.state.quiz_arr];
    return (
      <div className={styles["quiz-container"]}>
        <h1>Quiz</h1>
        <div>
          {arr.map((item) => {
            return (
              <div>
                <h3>
                  <span role="img" aria-label="some">
                    👉
                  </span>{" "}
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
