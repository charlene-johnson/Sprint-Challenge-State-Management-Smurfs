import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import {getSmurf, addSmurf} from '../actions/action';
import {connect} from 'react-redux';


function App(props) {
  
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        <Smurfs getSmurf={props.getSmurf} smurfs={props.smurfs} />
        <SmurfForm addSmurf={props.addSmurf}/>
      </div>
    );
  }
const mapToStateProps = state => {
  return {
    smurf: state.smurf,
    isFetching: state.isFetching,
    error: state.error
  };
};

const mapDispatchToProps = {getSmurf, addSmurf};
export default connect(mapToStateProps, mapDispatchToProps) (App);
