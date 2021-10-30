import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {General} from './Components/general';

ReactDOM.render(
  <React.StrictMode>
    <General />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(<General />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
