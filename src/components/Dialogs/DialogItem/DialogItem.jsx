import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    debugger;
    let path = "/dialogs/" + props.ID;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}



export default DialogItem;