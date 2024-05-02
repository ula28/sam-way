import React from "react";
import {NavLink} from "react-router-dom";
import s from'./Dialogs.module.css'
import {T_Actions, T_dialogs, T_dialogsPage, T_users} from "../data/data";
import {ADD_MESSAGE, CHANGE_VALUE_NEW_MESSAGE} from "../../helpers/actionTypes";
import {AddMessageCreator, ChangeValueNewMessageCreator} from "../data/reducers/dialogsPageReducer";


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

export class Dialogs extends React.Component<{ users: T_users[],dialogsPage:T_dialogsPage,dispatch:(action:T_Actions)=>void  }>{
    render(){
        const{ users,dialogsPage,dispatch}=this.props

        const filteredMessageFromUserId=dialogsPage.dialogs.filter(dialog=>dialog.userId==="2" ).map(f=><li>{f.messages}</li>)
        const onChangeNewMessageValue=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
            // dispatch({type:CHANGE_VALUE_NEW_MESSAGE,value:e.currentTarget.value})
            let value=e.currentTarget.value
            ChangeValueNewMessageCreator(value)
        }
        const addMessageHandler=()=>{
            // dispatch({type:ADD_MESSAGE})
            AddMessageCreator()
        }
        return (
            <div className={s.dialogs_block}>
                <div className={s.users}>
                    {users.length
                        ? users.map(u => <DialogItem id={u.id} name={u.name}/>)
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
                            onChange={onChangeNewMessageValue}
                        ></textarea>
                    </div>
                    <button onClick={addMessageHandler}>add message</button>

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

