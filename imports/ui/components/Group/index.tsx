import React from 'react';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

export const Group = ({ group }) => {
    console.log(group);

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
                    Вы подписаны
                        </div>
            </div>
        </div >
    );
};