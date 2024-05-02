import {ADD_MESSAGE, CHANGE_VALUE_NEW_MESSAGE} from "../../../helpers/actionTypes";
import { T_dialogsPage} from "../data";


export type T_AddMessageAction={
    type:'ADD-MESSAGE'
}
export type T_ChangeValueNewMessageAction={
    type:'CHANGE-VALUE-NEW-MESSAGE'
    value:string
}
export type T_MainMessageAction=T_AddMessageAction|T_ChangeValueNewMessageAction
export const DialogsPageReducer=(state:T_dialogsPage, action: any):T_dialogsPage=>{
    if(action.type===ADD_MESSAGE){
        const newMessage={
            id: crypto.randomUUID(),
            userId: "2",
            messages: state.newMessageValue
        }
state.dialogs.push(newMessage)
        state.newMessageValue=''
    }else if(action.type===CHANGE_VALUE_NEW_MESSAGE){
        state.newMessageValue=action.value
    }
    return state
    // this._callSubscriber(this._state)
}

export const AddMessageCreator=()=>({type: ADD_MESSAGE})
export const ChangeValueNewMessageCreator=(value:string)=>({type: CHANGE_VALUE_NEW_MESSAGE,value:value})