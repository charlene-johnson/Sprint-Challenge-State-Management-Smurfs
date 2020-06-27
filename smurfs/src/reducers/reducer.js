import {FETCHING_SMURFS_START, FETCHING_SMURFS_SUCCESS, ADD_SMURF} from "../actions/action";

const initialState = {
    isFetching: false,
    smurfs: [],
    error: '',
    didFetch: false
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
                didFetch: true
            };
        default:
            return state;
    };
};