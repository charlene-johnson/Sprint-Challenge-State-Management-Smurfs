import React, {useEffect} from "react";

const Smurfs = ({getSmurf, smurfs, isFetching}) => {

    useEffect(()=> {
        getSmurf();
    }, [getSmurf])

    if(isFetching) {
        return <h2>Fetching your Smurfs...</h2>
    }

    return (
        <div>{smurfs.map((smurf, key)=> {
            return (
                <div className="Smurfs" key={key}>
                    <p>Smurf's Name: {smurf.name}</p>
                    <p>Smurf's Age: {smurf.age}</p>
                    <p>Smurf's Height: {smurf.height}</p>
                </div>
            )
        })}</div>
        )
    }   
       
export default Smurfs;