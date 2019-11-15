import React from "react";

import "./App.css";
import Greeting from "./components/greeting";
import ImageAlbum from "./components/imageAlbum";
import MyButton from "./components/counter";
import namaBebas from "./assets/logos/image1.jpeg"; //import image
import StateClass from "./components/stateClass";

function App() {
  return (
    <fragment>
      <div className="App">
        <Greeting name="Roby Afrizal Palmendha" /> {/*  Ini adalah Komponen */}
        <ImageAlbum imageKu={namaBebas} />
      </div>
      <center className="counter">
        <MyButton />
      </center>
      <center>
        <hr />
        <StateClass />
      </center>
    </fragment>
  );
}

export default App;
