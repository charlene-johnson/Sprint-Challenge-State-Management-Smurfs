import React from 'react';
import {useForm} from '../hooks/useForm';

const initialValue = {
    name: '',
    age: '',
    height: ''
};

export default function SmurfForm () {

 const [values, handleChanges, submitSmurf] = useForm(initialValue, 'smurfForm')

    
    return (
        <div>
            <form onSubmit={submitSmurf}>
                <h2>Create a Smurf</h2>
                <lable>Smurf's Name:</lable>
                <input
                    type="text"
                    value={values.name}
                    name="name"
                    placeholder="Enter Smurf's Name"
                    onChange={handleChanges}/>
                <lable>Smurf's Age</lable>
                <input
                    type="text"
                    value={values.age}
                    name="age"
                    placeholder="Enter Smurf's Age"
                    onChange={handleChanges}/>
                <lable>Smurf's Height</lable>
                 <input
                    type="text"
                    value={values.height}
                    name="height"
                    placeholder="Enter Smurf's Height"
                    onChange={handleChanges}/>
                <button>Create Smurf</button>
            </form>
        </div>
    );
};
