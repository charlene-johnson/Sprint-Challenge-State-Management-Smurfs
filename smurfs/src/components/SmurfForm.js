import React, {useState} from 'react';
import { connect } from 'react-redux';
import {getSmurf, addSmurf} from '../actions/action';


const SmurfForm = ({addSmurf}) => {
 
 const [smurfs, setSmurfs] = useState ('')

 const handleChanges = e => {
    setSmurfs({
        ...smurfs,
        [e.target.name]: e.target.value
    });
};

const submitSmurf = e => {
    e.preventDefault();
    addSmurf(smurfs)
    console.log(smurfs)
    setSmurfs({name: '', age: '', height: ''})
};
    
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


  const mapDispatchToProps = {getSmurf, addSmurf}
   
export default connect(null, mapDispatchToProps) (SmurfForm)