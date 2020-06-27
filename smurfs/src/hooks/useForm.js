import  {useState} from 'react';

export const useForm = (initialValues, key) => {
    const [values, setValues] = useState(initialValues, key);

    const handleChanges = e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    };

    const submitSmurf = e => {
        e.preventDefault();
    };

    return [values, handleChanges, submitSmurf]
}