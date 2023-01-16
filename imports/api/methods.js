import {Meteor} from "meteor/meteor";
import {ChatCollection, ContactsCollection} from "./collections";

Meteor.methods({
        'user.register'({username, email, password}) {
            Accounts.createUser({
                username: username,
                email: email,
                password: password,
            })
        },
        'users.setOnline'({userId}) {
            const user = Meteor.users.find({_id: userId}).fetch();
            ContactsCollection.upsert(
                {userId: userId},
                {userId: userId, username: user[0].username, active: true, lastSeen: new Date()}
            );
        },
        'users.setOffline'({userId}) {
            const user = Meteor.users.find({_id: userId}).fetch();
            ContactsCollection.upsert(
                {userId: userId},
                {userId: userId, username: user[0].username, active: false, lastSeen: new Date()}
            );
        },
        'chat.sendMessage'({userId, message}) {
            ChatCollection.insert({
                senderId: userId,
                message: message,
                sentAt: new Date()
            })
        }
    }
)