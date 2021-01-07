import { Form, Button } from "react-bootstrap";
import MyInput from "./MyInput";
import UseCadastro from "./UseCadastro";
import { PError } from "./styles";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { updateValue } from '../../../Componentes/MyToastr/toastrAction';

function Cadastro(props){
    const { values, errors, handleChange, store } = UseCadastro(props.updateValue);

    return (
        <Form onSubmit={store}>
            <MyInput 
            placeholder="Informe seu login"
            type='text'
            errors={errors}
            name='login'
            values={values}
            onchange={handleChange}
            />
            <MyInput
                type="password" 
                placeholder="Digite sua senha" 
                name='senha'
                values={values}
                onchange={handleChange}
                errors={errors}
            />
            <Form.Group>
                <Form.Label>Tipo</Form.Label>
                <Form.Control
                    as='select' 
                    name='tipo'
                    value={values.tipo}
                    onChange={handleChange}
                    defaultValue='CLIENTE'
                >
                    <option/>
                    <option value="CLIENTE">CLIENTE</option>
                    <option value="ATENDENTE">ATENDENTE</option>
                </Form.Control>
                {errors.tipo ? <PError>{errors.tipo}</PError> : false}
            </Form.Group>

            {
            values.tipo === 'ATENDENTE' ? 
            (
                <MyInput
                    placeholder='Qual será a comissão?'
                    type='number' 
                    name='comissao'
                    values={values}
                    onchange={handleChange}
                    errors={errors}
                />
            ) :
            false
            }
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

const mapDispatchToProps = dispatch => bindActionCreators({ updateValue }, dispatch);
export default connect(null, mapDispatchToProps)(Cadastro);