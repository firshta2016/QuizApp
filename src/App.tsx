import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { Books } from './components/Books';
import { Movies } from './components/Movies';
import { Sports } from './components/Sports';
import { Computers } from './components/Computers';
import { HomePage } from './components/HomePage';

export enum Routes {
  Books ="/Books",
  Movies = "/Movies",
  Sports = "/Sports",
  Computers = "/Computers",
}

export const App = () => { 
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path={Routes.Sports} component={Sports} />
        <Route path={Routes.Books} component={Books} />
        <Route path={Routes.Movies} component={Movies} />
        <Route path={Routes.Computers} component={Computers} />
      </div>
    </BrowserRouter>
  );
};