import {ADD_POST, CHANGE_VALUE_TEXT_POST} from "../../../helpers/actionTypes";


export type T_posts={
    message:string
    likeCount: string
    id:string
}
export type T_PostsPage={
    postValue:string
    posts:T_posts[]
}
    export const initial:T_PostsPage = {
        postValue: "",
        posts: [
            {id: crypto.randomUUID(), message: "hey", likeCount: "15"},
            {id: crypto.randomUUID(), message: "bye", likeCount: "15"},
            {id: crypto.randomUUID(), message: "no", likeCount: "15"}
        ]
    }
export const PostsPageReducer=(state=initial, action: T_MainPostAction)=> {
    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: crypto.randomUUID(),
                message: state.postValue,
                likeCount: "0"
            }
       return {...state,posts:[newPost,...state.posts],postValue: ""}
            // const newPost = {
            //     id: crypto.randomUUID(),
            //     message: state.postValue,
            //     likeCount: "0"
            // }
            // state.posts.push(newPost)
            // state.postValue = ''
            // return state
        case "CHANGE-VALUE-TEXT-POST":
            // state.postValue = action.value
            return {...state,postValue:action.value}
        default:
            return {...state}
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
type T_AddPostAction={
    type:typeof ADD_POST
}
// export type T_ChangeValueTextPostAction={
//     type: typeof CHANGE_VALUE_TEXT_POST
//     value:string
// }
type T_ChangeValueTextPostAction=ReturnType<typeof ChangeValueTextPostCreator>
export type T_MainPostAction=T_AddPostAction|T_ChangeValueTextPostAction
export const AddPostPageCreator=():T_AddPostAction=>({type:ADD_POST })
export const ChangeValueTextPostCreator = (value: string) => (
    {
        type: CHANGE_VALUE_TEXT_POST,
        value: value
    } as const
)