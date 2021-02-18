import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './ReduxStore';
import ReduxPage from './page/ReduxPage';
import ReactReduxPage from './page/ReactReduxPage';

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <ReduxPage /> */}
    <Provider store={store}>
      <ReactReduxPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
