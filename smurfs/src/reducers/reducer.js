import {FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE, ADDING_SMURF, ADD_SMURF} from "../actions/action";

const initialState = {
    isFetching: false,
    smurfs: [],
    error: '',
}

export const smurfReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetching: true,
                error:''
            };
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                smurfs: action.payload,
                isFetching: false,
               
            };
        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ADDING_SMURF:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case ADD_SMURF:
            return {
                ...state,
                isFetching: false,
                error: '',
                smurfs: action.payload
            };
        default:
            return state;
    };
};