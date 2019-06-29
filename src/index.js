import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

import promise from 'redux-promise'
import multi from 'redux-multi'
import thunk from 'redux-thunk'

import Routes from './screens/routes'
import reducers from './store/reducers'

import './index.css';
import * as serviceWorker from './serviceWorker';


const outerTheme = createMuiTheme({
  typography: {
    // Use the system font.
    fontFamily:
      '"Montserrat", sans-serif',
  },
});

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ 
      && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(multi, thunk, promise)(createStore)(reducers, devTools)
ReactDOM.render(
<Provider store={store}>
  <ThemeProvider theme={outerTheme}>
    <Routes />
  </ThemeProvider>
</Provider>,
document.getElementById('root'));
serviceWorker.unregister();

