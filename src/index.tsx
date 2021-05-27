import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';

import LoginForm from './components/forms/forms/LoginForm';
import Profile from './components/profile/Profile';
import Welcome from './components/welcome/Welcome';

import Empty from './typings/empty';
import { UserUsername } from './typings/user';

import './assets/css/index.css';
import './assets/css/reset.css';

ReactDOM.render(
    <StrictMode>
        <Router>
            <Switch>
                <Route exact path="/" render={(props: RouteComponentProps<Empty>): JSX.Element => (
                    <Welcome {...props} />
                )} />
                <Route exact path="/login" render={(props: RouteComponentProps<Empty>): JSX.Element => (
                    <LoginForm {...props} />
                )} />
                <Route exact path="/:username" render={(props: RouteComponentProps<UserUsername>): JSX.Element => (
                    <Profile {...props} />
                )} />
            </Switch>
        </Router>
    </StrictMode>,
    document.getElementById('root')
);
