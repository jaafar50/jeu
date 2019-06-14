import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Personnage from './Personnage';
import Frapper from './Frapper';
import Dormir from './Dormir';
import * as serviceWorker from './serviceWorker';




let force1=80;
let force2=40;
let vie1=400;
let vie2=800;


ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Personnage nom="San" prenom="Goku" force={force1} vie={vie1} />, document.getElementById('perso1'));
ReactDOM.render(<Personnage nom="San" prenom="Gohan" force={force2} vie={vie2} />, document.getElementById('perso2'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
