import { Form } from 'react-bootstrap';
import { PError } from '../styles';

function MyInput({
    errors, type, placeholder, name, values, onchange
}){
    return (
        <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control
                type={type} 
                placeholder={placeholder} 
                name={name}
                value={values[name]}
                onChange={onchange}
            />
            {errors[name] ? <PError>{errors[name]}</PError> : false}
        </Form.Group>
    )
}

export default MyInput;