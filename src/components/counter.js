import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
    this.buttonAddClicked = this.buttonAddClicked.bind(this);
    this.buttonSubClicked = this.buttonSubClicked.bind(this);
  }
  buttonAddClicked(event) {
    this.setState({ value: this.state.value + 1 });
  }
  buttonSubClicked(event) {
    if (this.state.value === 0) {
      alert("Angka sudah tidak bisa dikurang lagi");
    } else {
      this.setState({ value: this.state.value - 1 });
    }
  }
  render() {
    return (
      <div>
        <div>{this.state.value}</div>
        <button onClick={this.buttonAddClicked}>Tambah</button>
        <button onClick={this.buttonSubClicked}>Kurang</button>
      </div>
    );
  }
}

export default Counter;
