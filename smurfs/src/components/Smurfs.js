import React from "react";
import {connect} from 'react-redux';
import {getSmurf} from '../actions/action';

const Smurfs = (props) => {
    if(props.isFetching) {
        return <h2>Fetching your Smurfs...</h2>
    }

    return (
        <>
        <div className="Smurfs">
            
        </div>
        </>
    )
}