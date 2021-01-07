import { combineReducers } from "redux";
import { toastrReducer } from '../Componentes/MyToastr/toastrReducer'

export const Reducers = combineReducers({
    toastr: toastrReducer
})