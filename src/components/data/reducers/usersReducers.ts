

export type T_UserBody={
    id: number,
    name: string,
    status: string| null
    photos:{
        small:string| null,
        large:string| null
    }
    followed:boolean
}
export type T_usersState={
   items: T_UserBody[],
    totalCount:number,
    error:string|null,
    activePage:number,
    pageSize:number
}
const initialState:T_usersState={
    items: [],
    totalCount:0,
    error:null,
    activePage:1,
    pageSize:5
}
export const UsersReducers = (state = initialState, action: T_UsersAC) => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users:state.items.map(u => u.id === action.userId ? {...u, follow: action.follow} : u)}
        case 'SET_SERVER_USER':
            return{...state,items:action.userData,totalCount:action.totalCount,error:action.error}
        case 'CHANGE-ACTIVE-PAGE':
            return{...state,activePage:action.pageNumber}
        default:
            return state
    }
}

type T_FollowChangeAC=ReturnType<typeof followChangeAC>
type T_SetUsersAC=ReturnType<typeof setUsersAC>
type T_ChangeActivePageAC=ReturnType<typeof ChangeActivePageAC>
// type T_UnFollowAC=ReturnType<typeof unfollowAC>

 export type T_UsersAC= T_FollowChangeAC | T_SetUsersAC|T_ChangeActivePageAC
export const followChangeAC=(userId:number,follow:boolean)=>{
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
export const setUsersAC=(userData:T_UserBody[],totalCount:number, error:string|null)=>{
    return{
        type:'SET_SERVER_USER',
        userData:userData,
        totalCount,
        error
    } as const
}
export const ChangeActivePageAC=(pageNumber:number)=>{
    return{
        type:'CHANGE-ACTIVE-PAGE',
        pageNumber
    }as const

}