import React from 'react';
import { mount } from 'react-mounter';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { GroupsPage } from '../../ui/pages/Groups';
import { GroupPage } from '../../ui/pages/Group';
import { AddGroupPage } from '../../ui/pages/AddGroup';
import {useSubscription} from "../../lib/client/reactHooks";

const MainLayout = ({ content }) => {
    useSubscription('users.all');
    return (
        <div>
            <header>
                This is our header;
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
