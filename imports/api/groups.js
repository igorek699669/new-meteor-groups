import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Groups = new Mongo.Collection('groups');
if (Meteor.isServer) {
    // This code only runs on the server
    Meteor.publish('groups', function tasksPublication() {
        return Groups.find({});
    });
}
Meteor.methods({
    'groups.insert'(name, description) {
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
    'groups.remove'(taskId) {
        check(taskId, String);
        const task = Groups.findOne(taskId);
        if (task.private && task.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }
        Groups.remove(taskId);
    },

    'tasks.setPrivate'(taskId, setToPrivate) {
        check(taskId, String);
        check(setToPrivate, Boolean);

        const task = Groups.findOne(taskId);

        // Make sure only the task owner can make a task private
        if (task.owner !== this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Groups.update(taskId, { $set: { private: setToPrivate } });
    },
});