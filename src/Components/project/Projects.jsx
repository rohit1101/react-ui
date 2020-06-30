import React from "react";
import { Cards } from "../project/CardsContainer";
import { Loading } from "./Loading";
import styles from "./Cards.module.css";
export class Projects extends React.Component {
  state = {
    repo_arr: [],
    loading: true,
  };

  async componentDidMount() {
    const endpoint = `https://api.github.com/users/rohit1101/repos`;
    const res = await fetch(endpoint);
    const data = await res.json();
    if (data.length) {
      return this.setState({ repo_arr: data });
    } else {
      return <Loading />;
    }
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
