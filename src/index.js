import './mui.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import setAuthorizationToken from './util/APIUtils';
import {createStore,applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';
import jwtDecode from 'jsonwebtoken';
import {setCurrentUser} from './util/APIUtils';
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);


// if (localStorage.jwtToken) {
//     store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
//     setAuthorizationToken(localStorage.jwtToken);
//   }

  
setAuthorizationToken(sessionStorage.accesstoken);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

