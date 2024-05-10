import {Navigate, Route, Routes} from "react-router-dom";
import {Profile} from "../profile/Profile";
import {Dialogs} from "../dialogs/Dialogs";
import React from "react";
import {T_Actions, T_data} from "../data/data";
import s from "../header/Header.module.css";
import {DialogsContainer} from "../dialogs/DialogsContainer";
import {MyPostsContainer} from "../profile/MyPostsContainer";
import Users from "../users/Users";
import {UsersContainer} from "../users/UsersContainer";

// import s from "../header/Header.module.css";

// type T_RoadMapProps={
//     data:T_data,
//     addPost:()=>void
// }

export class RoadMap extends React.Component<{
    // data:T_data,
    // addPost:()=>void,
    // changePostValue:(text:string)=>void
    // dispatch:(action:T_Actions)=>void
}>{
    render(){
        // const{ data,dispatch}=this.props
        return (
            <Routes>
                <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
                <Route path={'/profile'} caseSensitive={true}
                       element={<Profile
                           // postsPage={data.postsPage}
                           // addPost={addPost}
                           // changePostValue={changePostValue}
                           // dispatch={dispatch}
                       />}/>
                {/*<Route path={'/message'} element={<Dialogs />}/>*/}
                {/*<Route path={'/message/:id'} element={<Dialogs/>}/>*/}
                <Route path={'/message/:id'} element={<DialogsContainer
                    // users={data.dialogsPage.users}
                    // dialogsPage={data.dialogsPage}
                    // dispatch={dispatch}
                />}/>
                <Route path={'/music'} element={<div>Music</div>}/>
                <Route path={'/users'} element={<UsersContainer/>}/>
                {/*<Route path={'/news'} element={<News/>}/>*/}
                {/*<Route path={'/music'} element={<Music/>}/>*/}

                <Route path={'/*'} element={<div>404</div>}/>
            </Routes>

        )
    }
}


// const RoadMap:FC<{data:T_data,addPost:(value:string)=>void}>=(props)=>{
//     const{data, addPost}=props
//     return <Routes>
//         <Route path={'/'} element={<Navigate to={'/profile'}/>}/>
//         <Route path={'/profile'} caseSensitive={true}
//                element={<Profile
//                    posts={data.posts}
//                    addPost={addPost}
//
//                />}/>
//         {/*<Route path={'/message'} element={<Dialogs />}/>*/}
//         {/*<Route path={'/message/:id'} element={<Dialogs/>}/>*/}
//         <Route path={'/message/:id'} element={<Dialogs dialogsPage={data.dialogsPage} />}/>
//         {/*<Route path={'/news'} element={<News/>}/>*/}
//         {/*<Route path={'/music'} element={<Music/>}/>*/}
//         <Route path={'/*'} element={<div>404</div>}/>
//     </Routes>
// }
// export default RoadMap