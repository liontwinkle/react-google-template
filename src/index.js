import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommandPost from './components/CommandPost';
import {Dots} from 'react-preloaders';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <CommandPost />
    <Dots color={'#0168fa'} background="#ffffff" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
