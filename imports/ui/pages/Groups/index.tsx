import React from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import './style.less';
import { Group } from "../../components/Group";
import { Groups } from "../../../api/groups";
import { useSubscription } from '../../../lib/client/reactHooks';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
export const GroupsPage = () => {
    useSubscription('groups.all');
    const fillTestSuperAdmin = () => {
        const testPassword = '111111';

        const user = {
            _id: '666',
            username: 'superadmin',
            firstName: 'SuperF',
            lastName: 'AdminL',
            createdAt: new Date(2020, 5, 21),
            roles: ['admin','superAdmin'],
            birthday: new Date(1990, 5, 21),
            city: 'Minsk',
            country: 'BY',
            emails: [
                {
                    address: 'superadmin@itgen.io',
                    verified: true,
                },
            ],
            services: {},
        };

        const oldUser = Users.findOne(user._id);

        if (oldUser) return;

        Users.insert(user);

        Accounts.setPassword(user._id, testPassword);
    };

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
            <button >Залогиниться</button>
            <section className="groups">
                <div className="container">
                    <div className="groups-tabs">
                        <div className="tab-buttons-wrapper">
                            <button className="tab-buttons-wrapper__button">Все сообщества</button>
                            <button className="tab-buttons-wrapper__button">Мои сообщества</button>
                            <button onClick={()=>{
                                FlowRouter.go('addGroup')
                            }} className="tab-buttons-wrapper__button">Создать</button>
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