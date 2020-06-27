import React, {useState} from 'react';


export default function SmurfForm () {
    return (
        <div>
            <form>
                <h2>Create a Smurf</h2>
                <lable>Smurf's Name:</lable>
                <input
                    type="text"
                    value={}
                    name="name"
                    placeholder="Enter Smurf's Name"
                    onChange={handleChanges}/>
                <lable>Smurf's Age</lable>
                <input
                    type="text"
                    value={}
                    name="age"
                    placeholder="Enter Smurf's Age"
                    onChange={handleChanges}/>
                <lable>Smurf's Height</lable>
                 <input
                    type="text"
                    value={}
                    name="height"
                    placeholder="Enter Smurf's Height"
                    onChange={handleChanges}/>
                <button>Create Smurf</button>
            </form>
        </div>
    )
}
