import { Meteor } from 'meteor/meteor';
import '../imports/api/methods';
import {ChatCollection, ContactsCollection, UsersState} from "../imports/api/collections";

Meteor.startup(() => {

    Meteor.publish('contacts', function() {
        return ContactsCollection.find({userId: {$ne: Meteor.userId()}});
    })

    Meteor.publish('messages', function () {
        return ChatCollection.find({});
    })
});
