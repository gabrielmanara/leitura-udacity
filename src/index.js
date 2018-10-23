import React from 'react';
import ReactDOM from 'react-dom';
import lightTheme from './themes/index';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'; 
import { Provider } from "react-redux";
import reducer from './reducers';
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);



ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'));
