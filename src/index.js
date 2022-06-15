import React from 'react';
import {createRoot} from 'react-dom/client';
import CounterApp from './CounterApp';
 import './index.css';

// const divRoot = document.querySelector('#root');
const container = document.getElementById('root');
const root = createRoot(container);


root.render( <CounterApp value={123} />);

