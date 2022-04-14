import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {




   let dialogesElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
   let massagesElements = props.messages.map(m => <Message message={m.message}/>);

   return (
   <div className={s.dialogs}>
      <div className={s.dialogsItems}>
         {dialogesElements}
      </div>
      <div className={s.messages}>
         {massagesElements}
      </div>
   </div>
   )
}

export default Dialogs;