import { Meteor } from 'meteor/meteor';
import { Groups } from '../groups';
import { check } from 'meteor/check';

Meteor.publish('groups.all', function () {
  return Groups.find({});
});

Meteor.publish('groups.view', function (groupId) {
  check(groupId, String);

  return Groups.find({ _id: groupId });
});