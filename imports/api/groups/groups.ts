import { Mongo } from 'meteor/mongo';

export interface IGroup {
    _id: string;
    name: string;
    description: string;
    createdAt: Date;
}

export const Groups = new Mongo.Collection<IGroup>('groups');
