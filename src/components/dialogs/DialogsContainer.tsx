import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootDispatch, RootState} from "../data/redux/store";
import {addMessageAC, changeValueNewMessageAC, T_dialogsPage} from "../data/reducers/dialogsPageReducer";


type T_mapStateToProps={
    dialogsPage:T_dialogsPage,
}
type T_mapDispatchToProps={
    onChangeNewMessageValue:(value: string)=>void
    addMessage: () =>void
}
export type T_DialogsProps=T_mapStateToProps & T_mapDispatchToProps

// export class DialogsContainer extends React.Component<{ users: T_users[],dialogsPage:T_dialogsPage,dispatch:(action:T_Actions)=>void},any> {
//     render(){
//         const{ users,dialogsPage,dispatch}=this.props
//         const onChangeNewMessageValue=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
//             // dispatch({type:CHANGE_VALUE_NEW_MESSAGE,value:e.currentTarget.value})
//             let value=e.currentTarget.value
//             dispatch(ChangeValueNewMessageCreator(value))
//         }
//         const addMessageHandler=()=>{
//             // dispatch({type:ADD_MESSAGE})
//             dispatch(AddMessageCreator())
//         }
//         return <Dialogs
//             users={users}
//             dialogsPage={dialogsPage}
//             // dispatch={dispatch}
//         />
//
//     }
// }
//
// type T_MapDispatchToProps={
//     AddMessageCreator:()=>void,
//     ChangeValueNewMessageAC:(value:string)=>void
// }
// type T_MapStateToProps={
//     dialogsPage:T_dialogsPage
// }
// export type T_DialogsProps=T_MapDispatchToProps & T_MapStateToProps
const mapStateToProps=(state:RootState):T_mapStateToProps=>{
    return{
        dialogsPage:state.DialogsPageReducer,
    }
}
const mapDispatchToProps = (dispatch: RootDispatch):T_mapDispatchToProps => {
    return {
        // onChangeNewMessageValueHandler:(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
        //     let value=e.currentTarget.value
        //     dispatch(ChangeValueNewMessageAC(value))
        // }
        onChangeNewMessageValue: (value: string) => {
            dispatch(changeValueNewMessageAC(value))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer =connect(mapStateToProps, mapDispatchToProps)(Dialogs)