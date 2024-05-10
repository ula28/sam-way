import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
import {T_users} from "../data/data";
import {reduxStore} from "../data/redux/store";



type T_NavbarProps={
    users:T_users[]
}

export class Navbar extends React.Component<T_NavbarProps>{
    render() {
        // const{users}=this.props
const{users}=this.props
        const firstUserMessage=users[0].id

        return (
            <nav className={s.nav}>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                             to={"/profile"}>Profile
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                             to={`/message/${firstUserMessage}`}>Messages
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/news"}>News
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.item_active : s.item} to={"/music"}>Music
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                             to={"/settings"}>Settings
                    </NavLink>
                </div>
                <div>
                    <NavLink className={({isActive}) => isActive ? s.item_active : s.item}
                             to={"/users"}>Users
                    </NavLink>
                </div>

            </nav>
        )
    }
}
// export const Navbar:FC<{users:T_users[]}> = (props) => {
//     const{users}=props
//     const firstUserMessage=`/message/${users[0].id}`
//     // const location = useLocation();
//
//     return (
//         <nav className={s.nav}>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active:s.item} to={'/profile'}>Profile</NavLink>
//             </div>
//             {/*<div>*/}
//             {/*    /!*<NavLink*!/*/}
//             {/*    /!*    className={location.pathname === '/message' ? s.item_active : s.item}*!/*/}
//             {/*    /!*    to={'/message'}*!/*/}
//             {/*    /!*>*!/*/}
//             {/*    /!*    Messages*!/*/}
//             {/*    /!*</NavLink>*!/*/}
//             {/*</div>*/}
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active:s.item}  to={firstUserMessage}>Messages</NavLink>
//             </div>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active:s.item} to={'/news'}>News</NavLink>
//             </div>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active:s.item} to={'/music'}>Music</NavLink>
//             </div>
//             <div >
//                 <NavLink className={({isActive})=>isActive ? s.item_active:s.item} to={'/settings'}>Settings</NavLink>
//             </div>
//
//         </nav>
//
//     );
// };