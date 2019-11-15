import React, { Component } from "react";

class StateClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      classMate: ["Roby", "Afrizal", "Palmendha"],
      classMateName: ""
    };
    //this.changeLoadingState = this.changeLoadingState.bind(this)
  }
  changeLoadingState = () => {
    this.setState({
      isLoading: !this.state.isLoading
    });
  };
  getElemenName = (index, data) => {
    console.log(`[${index}] ${data}`);
    this.setState({
      classMateName: data
    });
  };
  render() {
    if (!this.state.isLoading) {
      return (
        <div className="klikData" onClick={this.changeLoadingState}>
          Ulang Click Data ini..!
        </div>
      );
    } else {
      return (
        <center>
          <div onClick={this.changeLoadingState}>
            {this.state.isLoading ? "Data Benar" : "Data Salah"}
          </div>

          <div>
            <h1>Isi Data : </h1>
            {this.state.classMate &&
              this.state.classMate.map((data, index) => {
                return (
                  <p
                    key={index}
                    onClick={() => this.getElementName(index, data)}
                  >
                    {data}
                  </p>
                );
              })}
          </div>

          <div>
            <h1>Ini nama lengkap saya</h1>
            {this.state.classMateName && <p>{this.state.classMateName}</p>}
          </div>
        </center>
      );
    }
  }
}

export default StateClass;
