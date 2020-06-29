import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {getSmurf} from '../actions/action';
import styled from 'styled-components';

const Paragraphs = styled.p `
font-family: 'Pangolin', cursive;
color: #230A59;
font-size: 1.5rem;
`

const Smurfs = ({getSmurf, smurfs, isFetching}) => {
    
    useEffect(()=> {
        getSmurf();
    }, [])
console.log("smurflog",smurfs)

    if(isFetching) {
        return <h2>Fetching your Smurfs...</h2>
    }
    
    return (
        <div>{smurfs && smurfs.map((smurf, key) => {
           

            return (
                <div className="Smurfs" key={key}>
                    <Paragraphs>Smurf's Name: {smurf.name}</Paragraphs>
                    <Paragraphs>Smurf's Age: {smurf.age} years old</Paragraphs>
                    <Paragraphs>Smurf's Height: {smurf.height}</Paragraphs>
                </div>
            )
        })}</div>
        )
    }  
    const mapToStateProps = state => {
        console.log(state)
        return {
          smurfs: state.smurfs,
          isFetching: state.isFetching,
          error: state.error
        };
      };
       
    
const mapDispatchToProps = {getSmurf}

export default connect(mapToStateProps, mapDispatchToProps)(Smurfs);