import React from 'react';
import {Meteor} from 'meteor/meteor';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

export const Group = ({ group }) => {
    console.log(group);
    console.log(Meteor.user());
    const subscribeHandler = ()=> {
        Meteor.call('users.addSubscribe' , Meteor.user()._id , group._id);
    };
    return (
        <div className="group-item" onClick={() => {
            FlowRouter.go('group', { groupId: group._id });
        }}>
            <div className="image">
                <img src={group.file} alt="" />
            </div>
            <div className="r-column">
                <div className="r-column__head-text">
                    {group.name}
                </div>
                <div className="r-column__counter">
                    100 подписчиков
                        </div>
                <div className="r-column__subscribe">
                    {group.owner!==Meteor.user()._id  ?(
                        <button onClick={()=> subscribeHandler()}>Подписаться</button>
                    ):(
                        <p>Вы подписаны</p>
                    )}
                </div>
            </div>
        </div >
    );
};