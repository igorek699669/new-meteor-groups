import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export const useUserId = () => useTracker(() => Meteor.userId(), []);
