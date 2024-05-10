
import {PostsPageReducer, T_MainPostAction} from "./reducers/postPageReducer";
import {
    DialogsPageReducer,
    T_MainMessageAction
} from "./reducers/dialogsPageReducer";


export type T_dialogs={
    id:string
    messages:string
    userId:string
}
export type T_users={
    id:string
    name:string
}
export type T_posts={
    message:string
    likeCount: string
    id:string
}
export type T_dialogsPage={
    dialogs:T_dialogs[]
    users:T_users[]
    newMessageValue:string
}
export type T_PostsPage={
    postValue:string
    posts:T_posts[]
}
export type T_data={
    dialogsPage:T_dialogsPage
    postsPage:T_PostsPage
}
export type T_store={
    _state:T_data,
    getState:()=>T_data,
    _callSubscriber:(state: T_data)=>void,
    // changePostValue:(text: string)=>void,
    // addPost:()=>void,
    subscribe:(observer:(_state: T_data)=>void)=>void
    dispatch:(action:T_Actions)=>void
}
// type T_AddPostAction={
//     type:'ADD-POST'
// }
// type T_ChangeValueTextPostAction={
//     type:'CHANGE-VALUE-TEXT-POST'
//    value:string
// }
// type T_AddMessageAction={
//     type:'ADD-MESSAGE'
// }
// type T_ChangeValueNewMessageAction={
//     type:'CHANGE-VALUE-NEW-MESSAGE'
//     value:string
// }
// export const data = {
//     dialogsPage: {
//         dialogs: [
//             {id: crypto.randomUUID(), userId: "1", messages: "Hi!"},
//             {id: crypto.randomUUID(), userId: "1", messages: "Hello!"},
//             {id: crypto.randomUUID(), userId: "2", messages: "Hey there!"}
//         ],
//         users: [
//             {id: "1", name: "Vasya"},
//             {id: "2", name: "Petya"},
//             {id: "3", name: "Kostya"},
//         ],
//     },
//     postsPage:{
//         postValue:"",
//         posts: [
//             {id:crypto.randomUUID(),message: "hey", likeCount: "15"},
//             {id:crypto.randomUUID(),message: "bye", likeCount: "15"},
//             {id:crypto.randomUUID(),message: "no", likeCount: "15"}
//         ]
//
//     }
//
// }
// export const changePostValue=(text:string)=>{
//     data.postsPage.postValue=text
//     rerenderEntireTree()
//
// }
// export const addPost=()=>{
//     const newPost= {
//         id:crypto.randomUUID(),
//         message: data.postsPage.postValue,
//         likeCount: "0"}
//     data.postsPage.posts.push(newPost)
//     rerenderEntireTree()
// }
export type T_Actions =T_MainPostAction & T_MainMessageAction
export const store: T_store= {
    _state: {
        dialogsPage: {
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
        },
        postsPage: {
            postValue: "",
            posts: [
                {id: crypto.randomUUID(), message: "hey", likeCount: "15"},
                {id: crypto.randomUUID(), message: "bye", likeCount: "15"},
                {id: crypto.randomUUID(), message: "no", likeCount: "15"}
            ]

        }
    },
    _callSubscriber(state: T_data) {
        console.log('rr')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    // changePostValue(text:string) {
    //   this._state.postsPage.postValue = text
    //     this._callSubscriber(this._state)
    // },
    // addPost()  {
    //     const newPost = {
    //         id: crypto.randomUUID(),
    //         message: this._state.postsPage.postValue,
    //         likeCount: "0"
    //     }
    //    this._state.postsPage.posts.push(newPost)
    //     this._state.postsPage.postValue = ''
    //     this._callSubscriber(this._state)
    // },
    dispatch(action) {
        this._state.postsPage = PostsPageReducer(this._state.postsPage, action)
        this._state.dialogsPage = DialogsPageReducer(this._state.dialogsPage,action)
        this._callSubscriber(this._state)
        // if(action.type===ADD_POST ){
        //         const newPost = {
        //             id: crypto.randomUUID(),
        //             message: this._state.postsPage.postValue,
        //             likeCount: "0"
        //         }
        //         this._state.postsPage.posts.push(newPost)
        //         this._state.postsPage.postValue = ''
        //         // this._callSubscriber(this._state)
        //     }else if(action.type===CHANGE_VALUE_TEXT_POST ){
        //         this._state.postsPage.postValue=action.value
        //         // this._callSubscriber(this._state)
        //     }else if(action.type===ADD_MESSAGE){
        //         const newMessage={
        //             id: crypto.randomUUID(),
        //             userId: "2",
        //             messages: this._state.dialogsPage.newMessageValue
        //         }
        //         this._state.dialogsPage.dialogs.push(newMessage)
        //         this._state.dialogsPage.newMessageValue=''
        //     }else if(action.type===CHANGE_VALUE_NEW_MESSAGE){
        //         this._state.dialogsPage.newMessageValue=action.value
        //     }
        //     this._callSubscriber(this._state)
        // }
    }
}