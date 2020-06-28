import React from 'react';
import {useForm} from '../hooks/useForm';

const initialValue = {
    name: '',
    age: '',
    height: ''
};

export default function SmurfForm () {

 const [smurfs, handleChanges, submitSmurf] = useForm(initialValue, 'smurfForm')

    
    return (
        <div>
            <form onSubmit={submitSmurf}>
                <h2>Create a Smurf!</h2>
                <label>Smurf's Name: </label>
                <input
                    type="text"
                    value={smurfs.name}
                    name="name"
                    placeholder="Enter Smurf's Name"
                    onChange={handleChanges}/>
                <label>Smurf's Age: </label>
                <input
                    type="text"
                    value={smurfs.age}
                    name="age"
                    placeholder="Enter Smurf's Age"
                    onChange={handleChanges}/>
                <label>Smurf's Height: </label>
                 <input
                    type="text"
                    value={smurfs.height}
                    name="height"
                    placeholder="Enter Smurf's Height"
                    onChange={handleChanges}/>
                <button>Create Smurf</button>
            </form>
        </div>
    );
};
