import React, { Component } from 'react';
import {Link} from "react-router-dom";
import { Groups } from '../../../api/groups.js';
import { Meteor } from 'meteor/meteor';

export default class Group extends Component {
    handleClick = (e) => {

    };
    render() {
        let toGroupPage = {
            pathname: '/one-group-page',
            state: {
                file: this.props.group.file,
                name: this.props.group.name,
            }
        };
        return (
            <Link to={toGroupPage}>
                <div className="group-item" onClick={this.handleClick}>
                    <div className="image">
                        <img src={this.props.group.file} alt=""/>
                    </div>
                    <div className="r-column">
                        <div className="r-column__head-text">
                            {this.props.group.name}
                        </div>
                        <div className="r-column__counter">
                            100 подписчиков
                        </div>
                        <div className="r-column__subscribe">
                            Вы подписаны
                        </div>
                    </div>
                </div>
            </Link>
        );
    }
}