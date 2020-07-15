import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Users } from "../../api/users";
import { Meteor } from 'meteor/meteor';
import { GroupsPage } from '../../ui/pages/Groups';
import { GroupPage } from '../../ui/pages/Group';
import { AddGroupPage } from '../../ui/pages/AddGroup';
import {useSubscription} from "../../lib/client/reactHooks";
import {useTracker} from "meteor/react-meteor-data";

const MainLayout = ({ content }) => {
    useSubscription('users.all');
    const loginUser = ()=>{
        new Promise((resolve, reject) => {
            let dataP = useTracker(() => Users.find({_id: '666'}).fetch());
            return resolve(dataP)
        }).then((data)=>{
            Meteor.loginWithPassword(data[0].username, '111111');
        });
    };

    return (
        <div>
            <header>
                This is our header;
                {Meteor.user()===null?(
                    <button onClick={()=>loginUser}>Залогиниться</button>
                ): <button>Вы уже залогинены</button>}

            </header>
            <main>
                {content()}
            </main>
        </div>
    );
};

FlowRouter.route('/', {
  name: 'groups',
  action() {
    mount(MainLayout, {
      content: () => <GroupsPage />,
    });
  },
});

FlowRouter.route('/group/:groupId', {
  name: 'group',
  action() {
    mount(MainLayout, {
      content: () => <GroupPage />,
    });
  },
});

FlowRouter.route('/add-group-page', {
    name: 'addGroup',
    action() {
        mount(MainLayout, {
            content: () => <AddGroupPage />,
        });
    },
});
