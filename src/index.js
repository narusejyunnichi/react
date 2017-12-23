import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import Home from './Component/Home'
import reducer from './Reducer'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducer)

ReactDOM.render(
    <Provider store = { store }>
        <Home />
    </Provider>
    , document.getElementById('root'));


