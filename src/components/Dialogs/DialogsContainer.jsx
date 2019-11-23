import React from "react";
import "./Dialogs.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"
import { updateNewMessageBodyCreator, sendMessageCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux"



let mapStateToProps =(state)=>{
return{
    dialogsPage:state.dialogsPage
}
}
let mapDispatchToProps =(dispatch)=>{
   return{
       updateNewMessageBody: (body)=>{
           dispatch(updateNewMessageBodyCreator(body));
       },
       sendMessage: ()=>{
           dispatch(sendMessageCreator())
        }
   } 
}
const DialogsContainer = connect (mapStateToProps,mapDispatchToProps)(Dialogs);

export default DialogsContainer;