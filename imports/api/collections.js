import { Mongo } from 'meteor/mongo';

export const ChatCollection = new Mongo.Collection('chat');
export const ContactsCollection = new Mongo.Collection('contacts');
