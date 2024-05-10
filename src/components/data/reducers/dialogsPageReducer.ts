import {ADD_MESSAGE, CHANGE_VALUE_NEW_MESSAGE} from "../../../helpers/actionTypes";

export type T_dialogs={
    id:string
    messages:string
    userId:string
}
export type T_users={
    id:string
    name:string
}
export type T_dialogsPage={
    dialogs:T_dialogs[]
    users:T_users[]
    newMessageValue:string
}
export const initialState:T_dialogsPage={
    newMessageValue: '',
    dialogs: [
        {id: crypto.randomUUID(), userId: "1", messages: "Hi!"},
        {id: crypto.randomUUID(), userId: "1", messages: "Hello!"},
        {id: crypto.randomUUID(), userId: "2", messages: "Hey there!"}
    ],
    users: [
        {id: "1", name: "Vasya"},
        {id: "2", name: "Petya"},
        {id: "3", name: "Kostya"},
    ],
}
export const DialogsPageReducer=(state=initialState, action:T_MainMessageAction)=>{
    switch(action.type){
        case "CHANGE-VALUE-NEW-MESSAGE":
            return {...state, newMessageValue: action.value}
        case "ADD-MESSAGE":
            const newMessage={
                id: crypto.randomUUID(),
                userId: "1",
                messages: state.newMessageValue
            }
            return{...state,dialogs:[newMessage,...state.dialogs],newMessageValue:''}
    default:
        return{...state}

    }
//     if(action.type===ADD_MESSAGE){
//         const newMessage={
//             id: crypto.randomUUID(),
//             userId: "2",
//             messages: state.newMessageValue
//         }
// state.dialogs.push(newMessage)
//         state.newMessageValue=''
//     }else if(action.type===CHANGE_VALUE_NEW_MESSAGE){
//         state.newMessageValue=action.value
//     }
//     return state
    // this._callSubscriber(this._state)
}
// export type T_AddMessageAction={
//     type:'ADD-MESSAGE'
// }
// export type T_ChangeValueNewMessageAction={
//     type:'CHANGE-VALUE-NEW-MESSAGE'
//     value:string
// }
// export const AddMessageAC=():T_AddMessageAction=>(
//     {
//         type: ADD_MESSAGE
//     }
//     )

type T_ChangeValueNewMessageAction=ReturnType<typeof changeValueNewMessageAC>
type T_AddMessageAction=ReturnType<typeof  addMessageAC>
export type T_MainMessageAction=T_AddMessageAction|T_ChangeValueNewMessageAction
export const changeValueNewMessageAC=(value:string)=>(
    {type: CHANGE_VALUE_NEW_MESSAGE,
        value:value} as const
)
export const addMessageAC=()=>(
    {
        type: ADD_MESSAGE

    } as const
)