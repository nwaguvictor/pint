// Import Libs And App
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

// Where to render App
const destination = document.querySelector('#root');

// Render App
ReactDOM.render(<App />, destination);