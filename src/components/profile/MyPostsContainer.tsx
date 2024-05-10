import React from "react";
import {MyPosts} from "./myposts/MyPosts";
import {AddPostPageCreator, ChangeValueTextPostCreator} from "../data/reducers/postPageReducer";
import {connect} from "react-redux";
import {RootDispatch, RootState} from "../data/redux/store";

// export class MyPostsContainer extends React.Component<{postsPage:T_PostsPage
//     dispatch:(action:T_Actions)=>void }> {
//     render(){
//         const{ postsPage,dispatch}=this.props
//
//         const changePostValueHandler=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
// // this.setState({textValue:e.currentTarget.value})
//             let value=e.currentTarget.value
// //          changePostValue(e.currentTarget.value)
// //          dispatch({type:CHANGE_VALUE_TEXT_POST,value:value})
//             dispatch(ChangeValueTextPostCreator(value))
//
//         }
//         return (
//           <MyPosts  postsPage={postsPage}   />
//         );
//     }
//
// }
const mapStateToProps=(state:RootState)=>{
    return{
        postsPage:state.PostsPageReducer
    }
}
const mapDispatchToProps = (dispatch: RootDispatch) => {
    return {
        onClickHandler: () => {
            // dispatch({type:ADD_POST})
            dispatch(AddPostPageCreator())
            // this.setState({textValue:''})
        },
        changePostValueHandler: (e: React.ChangeEvent<HTMLTextAreaElement>) => {
// this.setState({textValue:e.currentTarget.value})
            let value = e.currentTarget.value
//          changePostValue(e.currentTarget.value)
//          dispatch({type:CHANGE_VALUE_TEXT_POST,value:value})
            dispatch(ChangeValueTextPostCreator(value))

        }
    }
}
export const MyPostsContainer=connect(mapStateToProps,mapDispatchToProps)(MyPosts)