import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import MovieQuotes from './movie-quotes';
import SignIn from './sing_in';
import SignUp from './sing_up';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route path='/' exact component={Home}/>
            <Route path='/movie-quotes' exact component={MovieQuotes}/>
            <Route path='/sign-in' exact component={SignIn}/>
            <Route path='/sign-up' exact component={SignUp}/>
        </div>
    </div>
);

export default App;
