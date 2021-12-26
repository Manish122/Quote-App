import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {  Route } from "react-router";
import Instruction from './components/Instruction';



ReactDOM.render(
  <BrowserRouter>
    <Route exact path = '/' component = {App}></Route>
    <Route exact path = '/Instruction' component = {Instruction}></Route>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

