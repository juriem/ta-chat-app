import React, {memo, useState} from "react";
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import {ChatCollection, ContactsCollection} from "../api/collections";

export const Chat = () => {
    const isLoadingContacts = useSubscribe('contacts');
    const contacts = useFind(() => {
        return ContactsCollection.find({})
    })

    const isLoadingChat = useSubscribe('messages');
    const messages = useFind(() => {
        return ChatCollection.find({})
    })

    const [message, setMessage] = useState("");

    const sendMessage = (e) => {
        console.log('Send message: ', message, Meteor.userId());
        Meteor.call('chat.sendMessage', {
            userId: Meteor.userId(),
            message: message
        }, (error) => {
            if (!error) {
                setMessage("");
            }
        })

    }

    const ContactItem = memo(
        ({active, username, lastSeen}) => {
            const activeClassName = active  ? 'active' : null;
            const iconClass = "online-icon" + (active ? '' : ' offline');
            return <li className={activeClassName}>
                <div className="d-flex bd-highlight">
                    <div className="img-cont">
                        <img
                            alt=""
                            src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                            className="rounded-circle user-img"/>
                        <span className={iconClass}></span>
                    </div>
                    <div className="user-info">
                        <span>{username}</span>
                        <p>{username + ' ' + lastSeen}</p>
                    </div>
                </div>
            </li>
        }
    )

    const Message = memo(({senderId, message, date}) => {

        const entryDivClass = senderId === Meteor.userId()  ? 'd-flex justify-content-end mb-4' : 'd-flex justify-content-start mb-4';
        const messageContainerClass = senderId === Meteor.userId() ? 'msg-container-send' : 'msg-container';
        const messageTimeClass = senderId === Meteor.userId() ? 'msg-time-send' : 'msg-time';

        return (
            <div className={entryDivClass}>
                <div className="img-cont-msg">
                    <img
                        alt=""
                        src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
                        className="rounded-circle user-img-msg"/>
                </div>
                <div className={messageContainerClass}>
                    {message}
                    <span className={messageTimeClass}>{date}</span>
                </div>
            </div>
        )
    });


    return (
        <div className="container-fluid h-100">
            <div className="row justify-content-center h-100">
                <div className="col-md-4 col-xs-3 chat">
                    <div className="card mb-sm-3 mb-md-0">
                        <div className="card-header">
                            <h3>Contacts</h3>
                        </div>
                        <div className="card-body contacts_body">
                            <ul className="contacts">
                                {contacts.map((contact, ix) => <ContactItem key={ix} {...contact} />)}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="col-md-8 col-xs-6 chat">
                    <div className="card ">
                        <div className="card-body msg-card-body">
                            {
                                messages.map((data, ix) => <Message key={ix} {...data}/>)
                            }
                        </div>
                        <div className="card-footer">
                            <div className="input-group">
                                <textarea
                                    name=""
                                    className="form-control type-msg"
                                    onChange={e => setMessage(e.target.value)}
                                    value={message}
                                          placeholder="Type your message..."></textarea>
                                <div className="input-group-append">
                                    <span
                                        className="input-group-text send-btn"
                                          onClick={sendMessage}><i
                                        className="fas fa-location-arrow"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}