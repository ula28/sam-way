import React from "react";
import {NavLink} from "react-router-dom";
import s from'./Dialogs.module.css'
import {T_dialogsPage} from "../data/reducers/dialogsPageReducer";
import {T_DialogsProps} from "./DialogsContainer";


// import {AddMessageCreator, ChangeValueNewMessageCreator} from "../data/reducers/dialogsPageReducer";

//
// type T_DialogItem={
//     name:string
//     id:string
// }
// const DialogItem:React.FC<T_DialogItem>=(props)=>{
//     // const location = useLocation();
//     // const isActive = location.pathname === `/message/${props.id}`;
// return <NavLink
//     className={({isActive})=>isActive? s.users_active:s.users} to={`/message/${props.id}`}>{props.name}
//     {/*// className={isActive? s.users_active:s.users} to={`/message/${props.id}`}>*/}
//     {/*// {props.name}*/}
// </NavLink>
// }
class DialogItem extends React.Component<{ id:string, name:string }>{
    render(){
        const{id, name}=this.props
        return (
            <NavLink
                className={({isActive})=>isActive? s.users_active:s.users} to={`/message/${id}`}>{name}

            </NavLink>
        )
    }
}
// interface T_Dialogs{
//     users: T_users[]
//     dialogsPage:T_dialogsPage
//     dispatch:(action:T_Actions)=>void
// }

export class Dialogs extends React.Component< T_DialogsProps
//     {
//      dialogsPage:T_dialogsPage,
// //     // dispatch:(action:T_Actions)=>void
//     onChangeNewMessageValue:(value:string)=>void
//     addMessage:()=>void
//     // onChangeNewMessageValueHandler:(e:React.ChangeEvent<HTMLTextAreaElement>)=>void
// //     addMessageHandler:()=>void
//  }
>
{
    render(){
        const{ dialogsPage
            ,onChangeNewMessageValue,
            addMessage
            // onChangeNewMessageValueHandler
        }=this.props

        const filteredMessageFromUserId = dialogsPage.dialogs.filter(dialog => dialog.userId === "1").map(f => <li
            key={f.id}>{f.messages}</li>)
        const onChangeNewMessageValueHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            onChangeNewMessageValue(e.currentTarget.value)
        }
        const AddNewMessageHandler = () => {
            addMessage()
        }
        return (
            <div className={s.dialogs_block}>

                <div className={s.users}>
                    {dialogsPage.users.length
                        ? dialogsPage.users.map(u => <DialogItem id={u.id} name={u.name}/>)
                        : <div>dialogs empty</div>}
                    {/*<DialogItem id={'1'} name={'Vasya'}/>*/}
                </div>
                <div className={s.dialog}>
                    <ul>
                        {filteredMessageFromUserId.length
                            ? filteredMessageFromUserId
                            : <li>dialogs empty</li>}
                    </ul>
                    <div>
                        <textarea
                            placeholder={"enter your message"}
                            value={dialogsPage.newMessageValue}
                            onChange={ onChangeNewMessageValueHandler}
                        ></textarea>
                    </div>
                    <button onClick={AddNewMessageHandler} >add message</button>

                </div>
            </div>
        )
    }
}


// type T_Params={
//     id:string
// }
// export const Dialogs:FC<{dialogsPage:T_dialogsPage}> = (props) => {
//     const params=useParams<T_Params>()
//     const{dialogsPage}=props
//     console.log(params.id)
//     const filteredMessageFromUserId=dialogsPage.dialogs.filter(dialog=>dialog.userId===params.id ).map(f=><li>{f.messages}</li>)
//
//     return (
//         <div className={s.dialogs_block}>
//             <div className={s.users}>
//                 {dialogsPage.users.length
//                    ? dialogsPage.users.map(u=><DialogItem id={u.id} name={u.name}/>)
//                 :<div>dialogs empty</div>}
//                 {/*<DialogItem id={'1'} name={'Vasya'}/>*/}
//                 {/*<DialogItem id={'2'} name={'Petya'}/>*/}
//                 {/*<DialogItem id={'3'} name={'Kostya'}/>*/}
//             </div>
//             <div className={s.dialog}>
//                 <ul>
//                     {filteredMessageFromUserId.length
//                        ? filteredMessageFromUserId
//                         : <li>dialogs empty</li>}
//                 </ul>
//             </div>
//
//         </div>
//     );
// };

