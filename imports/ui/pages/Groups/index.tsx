import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import './style.less';
import { Group } from "../../components/Group";
import { Groups } from "../../../api/groups";
import { useSubscription } from '../../../lib/client/reactHooks';

export const GroupsPage = () => {
    useSubscription('groups.all');

    const groups = useTracker(() => Groups.find({}, { sort: { createdAt: -1 } }).fetch(), []);

    const renderGroups = () => {
        return groups.map((group) => {
            return (
                <Group
                    key={group._id}
                    group={group}
                />
            );
        });
    };

    return (
        <>
            <section className="groups">
                <div className="container">
                    <div className="groups-tabs">
                        <div className="tab-buttons-wrapper">
                            <button className="tab-buttons-wrapper__button">Все сообщества</button>
                            <button className="tab-buttons-wrapper__button">Мои сообщества</button>
                            <a href='/add-group-page'>
                                <button className="tab-buttons-wrapper__button">Создать</button>
                            </a>
                        </div>
                        <input type="text" className="search-input" placeholder='Поиск сообществ...' />
                        <div className="tab-content all-groups">
                            {renderGroups()}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};