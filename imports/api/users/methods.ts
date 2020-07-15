import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Users } from '../users';

Meteor.methods({
  'users.addSubscribe'(userId , groupId) {
    check(name, String);

    Users.update(userId , {
      $addToSet: {
        subscribedGroups: groupId,
      }
    });
  },
});