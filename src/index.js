import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'tachyons/css/tachyons.min.css';
import './index.css';
import Typography from '@material-ui/core/Typography';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Menu from './views/layouts/Menu';
import Footer from './views/layouts/Footer';
import Main from './Main';

import useTareaState from './useTareaState';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Menu />, document.getElementById('menu'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
ReactDOM.render(<Main />, document.getElementById('mainTareas'));
//ReactDOM.render(<TareaForm />, document.getElementById('FormularioAgregarTarea'));
//ReactDOM.render(<TareaList />, document.getElementById('ListaTareas'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
