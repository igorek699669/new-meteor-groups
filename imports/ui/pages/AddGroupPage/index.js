import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import {Groups} from "../../../api/groups";
import { Meteor } from 'meteor/meteor';

class AddGroupPage extends Component {
    addGroupHandler = (e) => {
        e.preventDefault();
        let name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        let description = ReactDOM.findDOMNode(this.refs.description).value.trim();
        Meteor.call('groups.insert', name , description);
        ReactDOM.findDOMNode(this.refs.name).value= '';
        ReactDOM.findDOMNode(this.refs.description).value = '';
        this.props.history.push('/');
    };
    render() {
        return(
            <>
                <section className="add-group">
                    <div className="container">
                        <div className="form-wrapper">
                            <form onSubmit={this.addGroupHandler}>
                                <div className="form-wrapper__head-text">Создать сообщество</div>
                                <input type="text" className="input" placeholder='Название' ref='name'/>
                                <input type="text" className="input" placeholder='Описание'ref='description'/>
                                <button className="btn">Создать</button>
                            </form>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default AddGroupPage;