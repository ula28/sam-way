import {connect} from "react-redux";
import Users from "./Users";
import {RootDispatch, RootState} from "../data/redux/store";
import {followChangeAC, T_UserBody} from "../data/reducers/usersReducers";

export type T_UsersProps={
    users:T_UserBody[],
    followChange:(userId:string,follow:boolean)=>void}

export const mapStateToProps=(state:RootState)=>{
    return {
        users:state.usersReducer.users
    }
}
export const mapDispatchToProps=(dispatch:RootDispatch)=>{
    return {
followChange:(userId:string,follow:boolean)=>{
    dispatch(followChangeAC(userId,follow))}
    }
}
export const UsersContainer=connect( mapStateToProps,mapDispatchToProps)(Users)