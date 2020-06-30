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
      <div className={styles.t}>
        <h1>Quiz</h1>
        {arr.map((item) => {
          return (
            <div>
              <h3>{item.question}</h3>
              <ol>
                <Options item={item.options} />
              </ol>
            </div>
          );
        })}
      </div>
    );
  }
}
