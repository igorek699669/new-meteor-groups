import { Meteor } from 'meteor/meteor';
import { Users } from '../../users';
import { check } from 'meteor/check';

Meteor.publish('users.all', function () {
  return Users.find({});
});
