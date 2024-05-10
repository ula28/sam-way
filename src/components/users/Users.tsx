import React from "react";
import {T_UsersProps} from "./UsersContainer";

class Users extends React.Component< T_UsersProps>  {
    render(){

        return (
            <div>
                {
                    this.props.users.map(u=>(
                        <div key={u.id}>
                            <h3>{u.name}</h3>
                            {
                                u.follow?
                                    <button onClick={()=>(this.props.followChange(u.id,!u.follow))} >Follow</button>
                                    :
                                    <button onClick={()=>(this.props.followChange(u.id,!u.follow))}>Unfollow</button>
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