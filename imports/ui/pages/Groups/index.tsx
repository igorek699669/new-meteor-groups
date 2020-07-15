import React , {useState} from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import './style.less';
import { Group } from "../../components/Group";
import { Groups } from "../../../api/groups";
import { Users } from "../../../api/users";
import  {Meteor} from 'meteor/meteor';
import { useSubscription } from '../../../lib/client/reactHooks';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

export const GroupsPage = () => {
    const [myGroupsView, setMyGroupsView] = useState(0);
    useSubscription('groups.all');


    const groups = useTracker(() => Groups.find({}, { sort: { createdAt: -1 } }).fetch(), []);
    const myGroups = useTracker(() => Groups.find({owner: Meteor.user()?Meteor.user()._id:null}, { sort: { createdAt: -1 } }).fetch(), []);

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
    const renderMyGroups = ()=>{
        if(Meteor.user()!==null){
            return myGroups.map((group) => {
                return (
                    <Group
                        key={group._id}
                        group={group}
                    />
                );
            });
        }
        return 'Вы не залогинены';
    };

    return (
        <>
            <section className="groups">
                <div className="container">
                    <div className="groups-tabs">
                        <div className="tab-buttons-wrapper">
                            <button onClick={()=>setMyGroupsView(0)} className="tab-buttons-wrapper__button">Все сообщества</button>
                            <button onClick={()=>setMyGroupsView(1)} className="tab-buttons-wrapper__button">Мои сообщества</button>
                            <button onClick={()=>{
                                FlowRouter.go('addGroup')
                            }} className="tab-buttons-wrapper__button">Создать</button>
                        </div>
                        <input type="text" className="search-input" placeholder='Поиск сообществ...' />
                        {myGroupsView==0? (
                            <div className="tab-content all-groups">
                                {renderGroups()}
                            </div>
                        ):(
                            <div className="tab-content my-groups">
                                {renderMyGroups()}
                            </div>
                        )}

                    </div>
                </div>
            </section>
        </>
    );
};