import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message'



const Dialogs = () => {

    let dialogs = [
        {
            ID: 1,
            name: "Dimych"
        },
        {
            ID: 2,
            name: "Andrew"
        },
        {
            ID: 3,
            name: "Sveta"
        },
        {
            ID: 4,
            name: "Sasha"
        },
        {
            ID: 5,
            name: "Victor"
        },
        {
            ID: 6,
            name: "Valera"
        }

    ]


    let messages = [
        {
            ID: 1,
            message: "Hi"
        },
        {
            ID: 2,
            message: "How is your"
        },
        {
            ID: 3,
            message: "Sveta"
        },
        {
            ID: 4,
            message: "Yo"
        },
        {
            ID: 5,
            message: "Yo"
        },
        {
            ID: 6,
            message: "Yo"
        }

    ]

    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} ID={d.ID} />);
    let messagesElements = messages.map(m => <Message message={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.dialog}>
                {messagesElements}

            </div>
        </div>
    )
}

export default Dialogs;