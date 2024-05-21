import React from "react";
import {T_UsersProps} from "./UsersContainer";
import foto from "../../assets/images/photo_2023-03-10_20-12-30.jpg"
import s from "./users.module.css"

type T_StateUsers={
    MaxCurrentPage:number
    MinCurrentPage:number
    step:number
}

class Users extends React.Component<T_UsersProps, T_StateUsers> {
    constructor(props: T_UsersProps) {
        super(props)
        this.state = {
            MaxCurrentPage: 10,
            MinCurrentPage: 1,
            step:5
        }
    }
    render(){
        // let MaxCurrentPage=10
        // let MinCurrentPage=1
        const pages:number[]=[]
        // const PageCounter=Math.ceil(this.props.totalCount/this.props.pageSize)
        for(let i=this.state.MinCurrentPage;i<=this.state.MaxCurrentPage;i++){
            pages.push(i)
        }
        const NextPageUsers=(isDirection:boolean)=>{
           if (isDirection){
                this.setState((state)=>({
                    MaxCurrentPage:state.MaxCurrentPage+state.step,
                    MinCurrentPage:state.MinCurrentPage+state.step
                }))
            }else{
               this.state.MinCurrentPage>this.state.step &&
               this.setState((state)=>({
                   MaxCurrentPage:state.MaxCurrentPage-state.step,
                   MinCurrentPage:state.MinCurrentPage-state.step
               }))
           }
        }
        return (
            <div>
                <div>
                    <button onClick={()=>NextPageUsers(false)}>{"<"}</button>
                    {
                        pages.map(p => {
                            return <button key={p} onClick={() => {
                                this.props.onPageChangeHandler(p)
                            }}>{p}
                            </button>
                        })
                    }
                    <button onClick={()=>NextPageUsers(true)}>{">"}</button>
                    {/*<button onClick={() => {*/}
                    {/*    this.props.onPageChangeHandler(2)*/}
                    {/*}}>2*/}
                    {/*</button>*/}
                    {/*<button onClick={() => {*/}
                    {/*    this.props.onPageChangeHandler(3)*/}
                    {/*}}>3*/}
                    {/*</button>*/}
                    {/*<button onClick={() => {*/}
                    {/*    this.props.onPageChangeHandler(4)*/}
                    {/*}}>4*/}
                    {/*</button>*/}
                    {/*<button onClick={() => {*/}
                    {/*    this.props.onPageChangeHandler(5)*/}
                    {/*}}>5*/}
                    {/*</button>*/}
                    {/*<button onClick={() => {*/}
                    {/*    this.props.onPageChangeHandler(6)*/}
                    {/*}}>6*/}
                    {/*</button>*/}
                    {/*<button onClick={() => {*/}
                    {/*    this.props.onPageChangeHandler(7)*/}
                    {/*}}>7*/}
                    {/*</button>*/}
                </div>
                {
                    this.props.users.map(u => (
                            <div key={u.id}>
                                <h3>{u.name}</h3>
                                <div>
                                    <img className={s.foto} src={u.photos.small || foto} alt="ava"/>
                                </div>
                                {
                                    u.followed ?
                                        <button onClick={() => (this.props.followChange(u.id, !u.followed))}>Follow</button>
                                        :
                                        <button
                                            onClick={() => (this.props.followChange(u.id, !u.followed))}>Unfollow</button>
                                }
                            </div>
                        )
                    )
                }
            </div>
        );
    }
}

export default Users;