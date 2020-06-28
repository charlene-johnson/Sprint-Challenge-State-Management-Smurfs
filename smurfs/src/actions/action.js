import axios from 'axios';
export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADD_SMURF = "ADD SMURF";


export const getSmurf = () => dispatch => {
    dispatch({type: FETCHING_SMURFS_START});
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            console.log(res.data)
            dispatch({type: FETCHING_SMURFS_SUCCESS, payload: res.data})
        })
        .catch(error => {
            dispatch({type: FETCHING_SMURFS_FAILURE, payload: error})
        });
};

export const addSmurf = () => dispatch => {
    dispatch({type: ADDING_SMURF})
    axios
        .post("http://localhost:3333/smurfs", addSmurf)
        .then(res => {
            console.log(res.data)
            dispatch({type: ADD_SMURF, payload: res.data})
        })
        .catch(err => {
            console.log(err)
        });
};