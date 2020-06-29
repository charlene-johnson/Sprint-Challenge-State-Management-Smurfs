import React from "react";
import "./App.css";
import SmurfForm from './SmurfForm';
import Smurfs from './Smurfs';
import styled from 'styled-components';

const Title = styled.h1 `
font-family: 'Pangolin', cursive;
color: #230A59;
`



function App(props) {
  
    return (
      <div className="App">
        <Title>Smurf Village</Title>
        <SmurfForm />
        <Smurfs getSmurf={props.getSmurf} smurfs={props.smurfs} />
      </div>
    );
  }

export default App;
