import React, {useEffect} from "react";


const Smurfs = ({getSmurf, smurfs, isFetching}) => {
    
    useEffect(()=> {
        getSmurf();
    }, [getSmurf])
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
       
export default Smurfs;