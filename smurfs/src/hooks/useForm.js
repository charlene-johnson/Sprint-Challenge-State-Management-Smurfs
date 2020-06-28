import  {useState} from 'react';
import { addSmurf } from '../actions/action';

export const useForm = (initialValues, key) => {
    const [smurfs, setSmurfs] = useState(initialValues, key);

    const handleChanges = e => {
        setSmurfs({
            ...smurfs,
            [e.target.name]: e.target.value
        });
    };

    const submitSmurf = e => {
        e.preventDefault();
        addSmurf(smurfs)
        setSmurfs({name: '', age: '', height: ''})
    };

    return [smurfs, handleChanges, submitSmurf]
}