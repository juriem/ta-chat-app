import {Meteor} from "meteor/meteor";

Meteor.methods({
        'user.register'({username, email, password}) {
            Accounts.createUser({
                username: username,
                email: email,
                password: password,
            })
        },
        'user.login'({username, password}) {
            Meteor.loginWithPassword(username, password);
            return true;
        },
        'user.logout'() {
            Meteor.logout()
        }
    }
)