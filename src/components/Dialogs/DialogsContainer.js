import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../redux/dialogs-reduser'
import {connect} from "react-redux";
import {withAuthRedirectContainer} from "../../HOC/AuthRedirectComponent";
import {compose} from "redux";


const mapStateToProps = (state) =>{
    return{
        dialogs: state.chat.dialogs,
        messages: state.chat.messages,
        newMessage: state.chat.newMessage,
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addMessage: (text) => {
            dispatch(addMessageActionCreator(text));
        }
    }
}

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    //withAuthRedirectContainer
)(Dialogs);