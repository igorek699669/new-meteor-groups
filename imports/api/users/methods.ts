import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Users } from '../users';

Meteor.methods({
  'users.checkIfMyGroup'(name) {
    check(name, String);

    // Make sure the user is logged in before inserting a task
    /*if (! this.userId) {
        throw new Meteor.Error('not-authorized');
    }*/

    Users.insert({
      name,
      description,
      createdAt: new Date(),
      // owner: this.userId,
      // username: Meteor.users.findOne(this.userId).username,
    });
  },
});