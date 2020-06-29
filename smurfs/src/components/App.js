import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';



function App(props) {
  
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        <SmurfForm />
        <Smurfs getSmurf={props.getSmurf} smurfs={props.smurfs} />
      </div>
    );
  }

export default App;
