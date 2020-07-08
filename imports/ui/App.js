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
    toggleHideCompleted() {
        this.setState({
            hideCompleted: !this.state.hideCompleted,
        });
    }
    handleSubmit(event) {
        event.preventDefault();

        // Find the text field via the React ref
        const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

        Meteor.call('tasks.insert', text);

        // Clear form
        ReactDOM.findDOMNode(this.refs.textInput).value = '';

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
export default withTracker(() => {
    Meteor.subscribe('tasks');
    return {
        tasks: Groups.find({},{ sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Groups.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),
    };
})(App);