import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './index.less';
import Group from "../../components/Group";
import {Link} from "react-router-dom";
import {Groups} from "../../../api/groups";


class GroupsPage extends Component {
    renderGroups() {
        return this.props.groups.map((group) => {
            return (
                <Group
                    key={group._id}
                    group={group}
                />
            );
        });
    }
    render() {
        return(
            <>
                <section className="groups">
                    <div className="container">
                        <div className="groups-tabs">
                            <div className="tab-buttons-wrapper">
                                <button className="tab-buttons-wrapper__button">Все сообщества</button>
                                <button className="tab-buttons-wrapper__button">Мои сообщества</button>
                                <Link to='/add-group-page'><button className="tab-buttons-wrapper__button">Создать</button></Link>
                            </div>
                            <input type="text" className="search-input" placeholder='Поиск сообществ...'/>
                            <div className="tab-content all-groups">
                                {this.renderGroups()}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default withTracker(() => {
    Meteor.subscribe('groups');
    return {
        groups: Groups.find({}).fetch()
    };
})(GroupsPage);