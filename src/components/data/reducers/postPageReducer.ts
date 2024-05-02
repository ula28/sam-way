import {ADD_POST, CHANGE_VALUE_TEXT_POST} from "../../../helpers/actionTypes";
import { T_PostsPage} from "../data";


export type T_AddPostAction={
    type:typeof ADD_POST
}
export type T_ChangeValueTextPostAction={
    type: typeof CHANGE_VALUE_TEXT_POST
    value:string
}
export type T_MainPostAction=T_AddPostAction|T_ChangeValueTextPostAction
export const PostPageReducer=(state:T_PostsPage, action:any)=> {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: crypto.randomUUID(),
                message: state.postValue,
                likeCount: "0"
            }
            state.posts.push(newPost)
            state.postValue = ''
            return state
        case "CHANGE-VALUE-TEXT-POST":
            state.postValue = action.value
            return state
        default:
            return state
    }
}
//     if(action.type===ADD_POST ){
//         const newPost = {
//             id: crypto.randomUUID(),
//             message: state.postValue,
//             likeCount: "0"
//         }
//         state.posts.push(newPost)
//         state.postValue = ''
//         // this._callSubscriber(this._state)
//     }else if(action.type===CHANGE_VALUE_TEXT_POST ){
//         state.postValue=action.value
//         // this._callSubscriber(this._state)
//     }
//     return state
// }

export const AddPostPageCreator=()=>({type:ADD_POST })
export const ChangeValueTextPostCreator=(value:string)=>({type:CHANGE_VALUE_TEXT_POST,value:value})