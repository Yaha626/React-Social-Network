import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message'



const Dialogs = (props) => {



    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} ID={d.ID} />);
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

    let newMessageElement = React.createRef();
    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text);
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}

            </div>
            <div className={s.dialog}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageElement}></textarea>
                    <div>
                        <button onClick={addMessage}>Add Message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;