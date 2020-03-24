import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
  return(
       <div className= {s.dialog + ' ' + s.active}>
           <NavLink to={'/Dialogs/1' + 'props.ID'}>{props.name}</NavLink>
       </div>
  )
}

const Message = (props) => {
    return (
    <div className={s.dialog}>{props.message}</div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
    <div className={s.dialogsItems}>
       <DialogItem name="Dimych" ID="1"/>
       <DialogItem name="Andrey" ID="2"/>
       <DialogItem name="Sveta" ID="3"/>
       <DialogItem name="Sasha" ID="4"/>
       <DialogItem name="Victor" ID="5"/>
       <DialogItem name="Valera" ID="6"/>   
    </div>
    <div className={s.dialog}>
        <Message message="Hi" />
        <Message message="How is your" />
        <Message message="Yo" />
    </div>
    </div>
    )
}

export default Dialogs;