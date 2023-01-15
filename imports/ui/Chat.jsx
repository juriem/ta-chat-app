import React, {memo} from "react";
import {useFind, useSubscribe} from "meteor/react-meteor-data";
import {ContactsCollection} from "../api/collections";

export const Chat = () => {
    const isLoadingContacts = useSubscribe('contacts');
    const contacts = useFind(() => {
        return ContactsCollection.find({})
    })

    const messages = [
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },
        {
            senderId: '@',
            message: 'Hi, how are you samim?',
            date: '8:40 AM, Today'
        },
        {
            senderId: '',
            message: 'Hi Khalid i am good tnx how about you?',
            date: '8:55 AM, Today'
        },

    ]

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

        const entryDivClass = senderId === ''  ? 'd-flex justify-content-end mb-4' : 'd-flex justify-content-start mb-4';
        const messageContainerClass = senderId === '' ? 'msg-container-send' : 'msg-container';
        const messageTimeClass = senderId === '' ? 'msg-time-send' : 'msg-time';

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
                                <textarea name="" className="form-control type-msg"
                                          placeholder="Type your message..."></textarea>
                                <div className="input-group-append">
                                    <span className="input-group-text send-btn"><i
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