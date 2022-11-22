import React from 'react';
import {
    sendMessage,
    updateNewMessage,
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthNavigate} from "../HOC/withAuthNavigate";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
    }
}
export default compose(
    connect(mapStateToProps, {sendMessage, updateNewMessage}),
    withAuthNavigate
)(Dialogs);
