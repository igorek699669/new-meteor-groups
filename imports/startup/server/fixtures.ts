import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Users } from '../../api/users';
import { Groups } from '../../api/groups';

Meteor.startup(() => {
  fillTestSuperAdmin();
  fillTestGroups();
});

const fillTestSuperAdmin = () => {
  const testPassword = '111111';

  const user = {
    _id: '666',
    username: 'superadmin',
    firstName: 'SuperF',
    lastName: 'AdminL',
    createdAt: new Date(2020, 5, 21),
    roles: ['admin', 'superAdmin'],
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
    subscribedGroups: [],
  };

  const oldUser = Users.findOne(user._id);

  if (oldUser) return;

  Users.remove({});

  Accounts.setPassword(user._id, testPassword);


};

const fillTestGroups = () => {
  Groups.remove({});

  Groups.insert({
    name: 'Test group',
    description: 'My first group in this world',
    createdAt: new Date(),
    owner: '666'
    // username: Meteor.users.findOne(this.userId).username,
  });

  Groups.insert({
    name: 'Test group 2',
    description: '-----------',
    createdAt: new Date(),
    owner: '666'
    // username: Meteor.users.findOne(this.userId).username,
  });

  Groups.insert({
    name: 'Test group 3',
    description: '-----------',
    createdAt: new Date(),
    owner: '555'
    // username: Meteor.users.findOne(this.userId).username,
  });
};