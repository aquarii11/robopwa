import React from 'react';
import ReactDOM from 'react-dom';
//import logo from './logo.svg';
import './index.css';
import App from './App';
// import MyComponent from './MyComponent';
// import Section from './Section';
// import CardList from './CardList';

import 'tachyons';
import * as serviceWorker from './serviceWorker';
import registerServiceWorker from './registerServiceWorker';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
registerServiceWorker();
