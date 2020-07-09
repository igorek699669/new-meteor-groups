import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { withTracker } from 'meteor/react-meteor-data';
import { Groups } from '../api/groups.js';
import { Meteor } from 'meteor/meteor';
import GroupsPage from './pages/GroupsPage';
import AddGroupPage from './pages/AddGroupPage';
import {BrowserRouter as Router , Switch , NavLink, Route} from 'react-router-dom';


// App component - represents the whole app
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hideCompleted: false,
        };
    }


    render() {
        return (
            <>  <Router>
                    <Switch>
                        <Route exact component={GroupsPage} path='/'/>
                        <Route exact component={AddGroupPage} path='/add-group-page'/>
                    </Switch>
                </Router>
            </>
        );
    }
}
export default App;