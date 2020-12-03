import React from 'react';
import style from "./index.module.css"
import DialogsItem from "./DialogItem/DialogItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";


const Dialogs = (props) => {
    let dialogs = props.dialogs.map(el => <DialogsItem name={el.name} key={el.id} id={el.id} />),
        messages = props.message.map(el => <DialogsMessage message={el.message} key={el.id} id={el.id} />);

    return(
        <div className="col-10 row">
            <div className="col-3">
                <div className="dialog_list">
                    {dialogs}
                </div>
            </div>
            <div className="col-9">
                <div className="message_list">
                    {messages}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;