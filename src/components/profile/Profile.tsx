import React from "react";
import {MyPosts} from "./myposts/MyPosts";
import {T_Actions, T_PostsPage} from "../data/data";
import s from "./Profile.module.css"


export class Profile extends React.Component<{postsPage:T_PostsPage,
    // addPost:()=>void,
    // changePostValue:(text:string)=>void
    dispatch:(action:T_Actions)=>void
}>{
    render(){
        const{ postsPage,dispatch}=this.props
        return (
            <div className={s.profile}>
                <img src="https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg"
                     alt=""/>
                <div>
                    ava+descr
                </div>
                <MyPosts
                    postsPage={postsPage}
                    // addPost={addPost}
                    // changePostValue={changePostValue}
                    dispatch={dispatch}
                />

            </div>
        )
    }
}


// export const Profile:FC<{posts:T_posts[],addPost:()=>void}>=(props) => {
//     const{posts,addPost}=props
//     return (
//         <div className={s.profile}>
//             <img src="https://deep-image.ai/blog/content/images/2022/09/underwater-magic-world-8tyxt9yz.jpeg" alt=""/>
//
//             <div>
//                 ava+descr
//             </div>
//             <MyPosts
//                 posts={posts}
//                 addPost={addPost}
//             />
//         </div>
//     );
// };

