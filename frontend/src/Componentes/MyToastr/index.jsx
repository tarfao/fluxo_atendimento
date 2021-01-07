import { Toast } from "react-bootstrap";
import { updateValue } from './toastrAction';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";

function MyToastr(props){
    const { updateValue, toastr: { show, titulo, mensagem, cor } } = props;
    
    const close = () => {
        updateValue({ show: false });
    }

    return(
        <div
        aria-live="polite"
        aria-atomic="true"
        style={{
            position: 'relative',
        }}
        >
            <Toast
                style={{
                position: 'absolute',
                top: 0,
                right: 0,
                backgroundColor: cor
                }}
                onClose={close}
                show={show}
                delay={3000}
                autohide
            >
                <Toast.Header>
                    <strong className="mr-auto">{titulo}</strong>
                </Toast.Header>
                <Toast.Body>
                    {mensagem}
                </Toast.Body>
            </Toast>
        </div>
    )
}

const mapStateToProps = state => ({ toastr: state.toastr });
const mapDispatchToProps = dispatch => bindActionCreators({ updateValue }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(MyToastr);