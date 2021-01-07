import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Pages/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store'
import { Provider } from 'react-redux';
import MyToastr from './Componentes/MyToastr';

ReactDOM.render(
  <Provider store={store}>
    <MyToastr />
    <Routes />
  </Provider>,
  document.getElementById('root')
);