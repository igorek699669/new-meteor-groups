import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Groups } from './groups';

Meteor.methods({
  'groups.insert'(name, description, file) {
    check(name, String);
    check(description, String);

    // Make sure the user is logged in before inserting a task
    /*if (! this.userId) {
        throw new Meteor.Error('not-authorized');
    }*/

    Groups.insert({
      name,
      description,
      createdAt: new Date(),
      // owner: this.userId,
      // username: Meteor.users.findOne(this.userId).username,
    });
  },
});