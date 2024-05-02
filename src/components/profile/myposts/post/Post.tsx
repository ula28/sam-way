import React from "react";
import s from "./Post.module.css"


export class Post extends React.Component<{message:string, likeCount:string }>{
    render(){
        const{ message,likeCount}=this.props
        return (
            <div>
                <div className={s.post}>
                    <img src="https://masterpiecer-images.s3.yandex.net/b0166bc089a211eeb06f7a2f0d1382ba:upscaled"
                         alt=""/>
                    {message}
                </div>
                <span>like {likeCount}</span>
            </div>
        )
    }
}


// export const Post:FC<{message:string, like:string }> = (props) => {
//     const{message, like}=props
//     return (
//         <div>
//             <div className={s.post}>
//                 <img src="https://masterpiecer-images.s3.yandex.net/b0166bc089a211eeb06f7a2f0d1382ba:upscaled" alt=""/>
//                 {message}
//             </div>
//             <span>like {like}</span>
//         </div>
//     );
// };

