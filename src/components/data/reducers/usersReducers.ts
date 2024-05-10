import {randomUUID} from "node:crypto";

export type T_UserBody={
    id: string,
    name: string,
    follow: boolean
}
export type T_usersState={
    users: T_UserBody[]
}
const initialState:T_usersState={
    users: [
        {id:crypto.randomUUID(), name:'Roma', follow:true},
        {id:crypto.randomUUID(), name:'User1', follow:false},
        {id:crypto.randomUUID(), name:'User2', follow:true},
        {id:crypto.randomUUID(), name:'User3', follow:false},
        {id:crypto.randomUUID(), name:'User4', follow:true},
        {id:crypto.randomUUID(), name:'User5', follow:false}
    ]
}
export const UsersReducers = (state = initialState, action: T_FollowChangeAC) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users:state.users.map(u => u.id === action.userId ? {...u, follow: action.follow} : u)}
        default:
            return state
    }
}

type T_FollowChangeAC=ReturnType<typeof followChangeAC>
// type T_UnFollowAC=ReturnType<typeof unfollowAC>

// export type T_UsersAC= T_FollowsAC | T_UnFollowAC
export const followChangeAC=(userId:string,follow:boolean)=>{
   return{
       type:'FOLLOW',
       userId:userId,
       follow:follow
   }as const
}
// export const unfollowAC=(userId:string,follow:boolean)=>{
//   return{
//       type:'UNFOLLOW',
//       userId:userId
//   }as const
// }