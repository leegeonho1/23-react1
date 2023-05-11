import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import useCounter from './chapter_07/useCounter';
import Accommodate from './chapter_07/Accommdate';
import ConfirmButton from './chapter_08/ConfirmButton';
import Toolbar from './chapter_09/Toolbar';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SigUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Calculator';

ReactDOM.render(
  <React.StrictMode>
    <Calculator/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();