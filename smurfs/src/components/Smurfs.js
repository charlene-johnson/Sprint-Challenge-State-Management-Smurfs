import React, {useEffect} from "react";
import {connect} from 'react-redux'
import {getSmurf} from '../actions/action';


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
                    <p>Smurf's Name: {smurf.name}</p>
                    <p>Smurf's Age: {smurf.age} years old</p>
                    <p>Smurf's Height: {smurf.height}</p>
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