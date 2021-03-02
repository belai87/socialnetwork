import React from 'react';
import DialogsItem from "./DialogItem/DialogItem";
import DialogsMessage from "./DialogsMessage/DialogsMessage";
import { Redirect } from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../FormsControl/Control";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const maxLength = maxLengthCreator(100);

const DialogForm = (props) => {
    const { handleSubmit } = props
    return(
        <form onSubmit={handleSubmit}>
            <Field validate={[required, maxLength]} value={props.newMessage} placeholder="Enter text..." name="MESSAGE" component={Textarea}/>
            <button className="btn btn-info">send</button>
        </form>
    )
}

const DialogReduxForm = reduxForm({form: 'post'})(DialogForm);

const Dialogs = (props) => {

    console.log(props);

    let dialogs = props.dialogs.map(el => <DialogsItem name={el.name} key={el.id} id={el.id} />),
        messages = props.messages.map(el => <DialogsMessage message={el.message} key={el.id} id={el.id} />);

    const onSubmit = (values) => {
        props.addMessage(values.MESSAGE);
    }

    return(
        <div className="col-10">
            <div className="row mb-4">
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
            <div className="row">
                <DialogReduxForm onSubmit={onSubmit} {...props}/>
            </div>
        </div>
    );
}

export default Dialogs;