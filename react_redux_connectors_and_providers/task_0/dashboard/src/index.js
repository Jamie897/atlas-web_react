import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; // Import applyMiddleware
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; // Import Redux Thunk middleware
import App from './App/App';
import uiReducer from './reducers/uiReducer';

// Create the Redux store with the uiReducer and apply Redux Thunk middleware
const store = createStore(uiReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
