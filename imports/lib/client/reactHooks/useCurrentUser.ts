import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';

export const useCurrentUser = () => useTracker(() => Meteor.user(), []);
