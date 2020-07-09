import React, { Component } from 'react';
import { Groups } from '../../../api/groups.js';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';

export default class Group extends Component {
    render() {
        return (
            <div className="group-item">
                <div className="image">
                    <img src="" alt=""/>
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
        );
    }
}