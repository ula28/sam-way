import React from "react";
import {Post} from "./post/Post";
import { T_Actions, T_PostsPage} from "../../data/data";
import s from "../../dialogs/Dialogs.module.css";

import {AddPostPageCreator, ChangeValueTextPostCreator} from "../../data/reducers/postPageReducer";

// export class MyPosts extends React.Component< T_Posts, I_Props>{
//     constructor(props:T_Posts|Readonly<T_Posts>){
//      super(props);
//      this.state={
//           textValue:''
//         }
//           }
//
//     render() {
// }
export class MyPosts extends React.Component<{ postsPage:T_PostsPage,
    // addPost:()=>void,
    // changePostValue:(text:string)=>void
    dispatch:(action:T_Actions)=>void
}>{

    render(){

        const{ postsPage}=this.props
        // const {textValue}=this.state
        const onClickHandler=()=>{
            // dispatch({type:ADD_POST})
            AddPostPageCreator()
            // this.setState({textValue:''})
     }
     const changePostValueHandler=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
// this.setState({textValue:e.currentTarget.value})
         let value=e.currentTarget.value
//          changePostValue(e.currentTarget.value)
//          dispatch({type:CHANGE_VALUE_TEXT_POST,value:value})
         ChangeValueTextPostCreator(value)

     }
        return (
            <div>
                <h3>My Posts</h3>
                <div>
                    <textarea
                        // value={textValue}
                        onChange={changePostValueHandler}
                        value={postsPage.postValue}>
                    </textarea>
                    <button onClick={onClickHandler}>Add post</button>
                </div>
                <div className={s.posts}>
                    {postsPage.posts.length
                        ? postsPage.posts.map((p) => <Post message={p.message} likeCount={p.likeCount}/>)
                        : <div>Post empty</div>}
                </div>
            </div>
        )
    }
}

// export const MyPosts:FC<{posts:T_posts[],addPost:()=>void}> = (props) => {
//     const{posts,addPost}=props
//     const onClickHandler=()=>{
//         addPost()
//     }
//     return (
//         <div>
//             <h3>My Posts</h3>
//             <div>
//                 <textarea></textarea>
//                 <button onClick={onClickHandler}>Add post</button>
//             </div>
//             <div className={s.posts}>
//                 {posts.length
//                     ? posts.map((p)=><Post message={p.message} like={p.likeCount}/>)
//                     :<div>Post empty</div>}
//             </div>
//             {/*<Post message={posts.message} like={posts.likeCount}/>*/}
//             {/*<Post message={posts.message} like={posts.likeCount}/>*/}
//             {/*<Post message={'bye'} like={1}/>*/}
//             {/*<Post message={'no'} like={17}/>*/}
//             {/*<Post message={'good'} like={15}/>*/}
//
//         </div>
//     )
// }



