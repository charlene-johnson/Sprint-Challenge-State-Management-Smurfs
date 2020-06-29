import React, {useState} from 'react';
import { connect } from 'react-redux';
import {getSmurf, addSmurf} from '../actions/action';
import styled from 'styled-components';

const Forms = styled.form `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 1%;
`
const Label = styled.label `
    margin-bottom: -10px;
    text-align: center;
    width: 275px;
    font-family: 'Pangolin', cursive;
    font-size: 2rem;
    color: #230A59
`
const Input = styled.input `
    width: 200px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid #829FD9;
    border-radius 4px;
`
const Button = styled.button ` 
    width: 200px;
    padding: 8px;
    background-color: #3E38F2;
    border: 1px solid #829FD9;
    border-radius 4px;
    margin-top: 1.6%;
    font-family: 'Pangolin', cursive;
    font-size: 1.5rem;

    &:hover {
        background-color: #829FD9;
    }
`

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
            <Forms onSubmit={submitSmurf}>
                <h2>Create a Smurf!</h2>
                <Label>Smurf's Name: </Label>
                <Input
                    type="text"
                    value={smurfs.name}
                    name="name"
                    placeholder="Enter Smurf's Name"
                    onChange={handleChanges}/>
                <Label>Smurf's Age: </Label>
                <Input
                    type="text"
                    value={smurfs.age}
                    name="age"
                    placeholder="Enter Smurf's Age"
                    onChange={handleChanges}/>
                <Label>Smurf's Height: </Label>
                 <Input
                    type="text"
                    value={smurfs.height}
                    name="height"
                    placeholder="Enter Smurf's Height"
                    onChange={handleChanges}/>
                <Button>Create Smurf</Button>
            </Forms>
        </div>
    );
};


  const mapDispatchToProps = {getSmurf, addSmurf}
   
export default connect(null, mapDispatchToProps) (SmurfForm)