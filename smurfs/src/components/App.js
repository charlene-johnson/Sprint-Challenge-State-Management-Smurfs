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
        <Smurfs getSmurf={props.getSmurf} smurfs={props.smurfs} />
        <SmurfForm addSmurf={props.addSmurf}/>
      </div>
    );
  }
const mapToStateProps = state => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    isFetching: state.isFetching,
    error: state.error
  };
};

const mapDispatchToProps = {getSmurf, addSmurf};
export default connect(mapToStateProps, mapDispatchToProps) (App);
