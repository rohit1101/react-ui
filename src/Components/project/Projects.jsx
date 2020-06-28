import React from "react";
import { Cards } from "../project/CardsContainer";
import styles from "./Cards.module.css";
export class Projects extends React.Component {
  state = {
    repo_arr: [],
  };

  async componentDidMount() {
    const endpoint = `https://api.github.com/users/rohit1101/repos`;
    const res = await fetch(endpoint);
    const data = await res.json();

    this.setState({ repo_arr: data });
  }

  render() {
    return (
      <div>
        <h1>GitHub Streak </h1>
        <div className={styles["card-container"]}>
          <Cards info={this.state.repo_arr} />
        </div>
      </div>
    );
  }
}
