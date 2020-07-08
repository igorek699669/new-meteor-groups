import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import './index.less';
import Group from "../../components/Group";
import {Link} from "react-router-dom";


class GroupsPage extends Component {
    renderGroups() {
        return this.props.groups.map((task) => {
            const currentUserId = this.props.currentUser && this.props.currentUser._id;
            const showPrivateButton = task.owner === currentUserId;

            return (
                <Group
                    key={task._id}
                    task={task}
                    showPrivateButton={showPrivateButton}
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
                                <div className="group-item">
                                    <div className="image">
                                        <img src="" alt=""/>
                                    </div>
                                    <div className="r-column">
                                        <div className="r-column__head-text">
                                            Пушистые истории
                                        </div>
                                        <div className="r-column__counter">
                                            100 подписчиков
                                        </div>
                                        <div className="r-column__subscribe">
                                            Вы подписаны
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}
export default withTracker(() => {
    return {

    };
})(GroupsPage);