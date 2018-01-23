import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './nav';
import Home from './home';
import MovieQuotes from './movie-quotes';
import SignIn from './sing_in';
import SignUp from './sing_up';
import auth from '../hoc/auth';
import redirect from '../hoc/redirect';

const App = () => (
    <div>
        <Nav/>
        <div className="container">
            <Route path='/' exact component={Home}/>
            <Route path='/movie-quotes' exact component={auth(MovieQuotes)}/>
            <Route path='/sign-in' exact component={redirect(SignIn, '/movie-quotes')}/>
            <Route path='/sign-up' exact component={redirect(SignUp, '/movie-quotes')}/>
        </div>
    </div>
);

export default App;
