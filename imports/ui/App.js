import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Groups } from '../api/groups.js';
import GroupsPage from './pages/GroupsPage';
import AddGroupPage from './pages/AddGroupPage';
import OneGroupPage from './pages/OneGroupPage';

import {BrowserRouter as Router , Switch , Route} from 'react-router-dom';


// App component - represents the whole app
class App extends Component {

    render() {
        return (
            <>
                <Router>
                    <Switch>
                        <Route exact component={GroupsPage} path='/'/>
                        <Route exact component={AddGroupPage} path='/add-group-page'/>
                        <Route exact component={OneGroupPage} path='/one-group-page'/>
                    </Switch>
                </Router>
            </>
        );
    }
}
export default App;