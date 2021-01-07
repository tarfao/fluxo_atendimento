const estado_inicial = {
    show: false,
    titulo: '' ,
    mensagem: '',
    cor: '#c1c1c1'
}

export const toastrReducer = (state = estado_inicial, action) => {
    switch(action.type){
        case 'UPDATE_VALUE':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}