import {connect} from "react-redux";
import Users from "./Users";
import {RootDispatch, RootState} from "../data/redux/store";
import {ChangeActivePageAC, followChangeAC, setUsersAC, T_UserBody, T_usersState} from "../data/reducers/usersReducers";
import axios from "axios";
import React from "react";


export type T_UsersProps={
    users:T_UserBody[],
    followChange:(userId:number,follow:boolean)=>void
    setServerUsers:(userData:T_UserBody[],totalCount:number,error:string|null)=>void
    setNewActivePage:(pageNumber:number)=>void
    activePage:number
    onPageChangeHandler:(activePage:number)=>void
    pageSize:number
    totalCount:number
}

class superUserContainer extends React.Component<T_UsersProps>{
    componentDidMount() {
        axios.get<T_usersState>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}`)
            .then(resp=>{
                this.props.setServerUsers(resp.data.items,resp.data.totalCount,resp.data.error)
            })
    }
    onPageChangeHandler(activePage:number){
        this.props.setNewActivePage(activePage)
        axios.get<T_usersState>(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.activePage}`)
            .then(resp=>{
                this.props.setServerUsers(resp.data.items,resp.data.totalCount,resp.data.error)
            })
    }
    render(){
        return <Users {...this.props}  onPageChangeHandler={this.onPageChangeHandler.bind(this)}/>
    }
}

export const mapStateToProps=(state:RootState)=>{
    return {
        users:state.usersReducer.items,
        activePage:state.usersReducer.activePage,
        pageSize:state.usersReducer.pageSize,
        totalCount:state.usersReducer.totalCount
    }
}
export const mapDispatchToProps=(dispatch:RootDispatch)=>{
    return {
followChange:(userId:number,follow:boolean)=>{
    dispatch(followChangeAC(userId,follow))
},
  setServerUsers:(userData:T_UserBody[],totalCount:number,error:string|null )=>{
    dispatch(setUsersAC(userData,totalCount,error))
  },
   setNewActivePage:(pageNumber:number)=>{
    dispatch(ChangeActivePageAC(pageNumber))
   }

    }
}
export const UsersContainer=connect( mapStateToProps,mapDispatchToProps)(superUserContainer)