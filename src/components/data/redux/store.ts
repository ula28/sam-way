import {combineReducers, createStore} from "redux";
import {DialogsPageReducer} from "../reducers/dialogsPageReducer";
import { PostsPageReducer} from "../reducers/postPageReducer";
import {UsersReducers} from "../reducers/usersReducers";

const rootReducer = combineReducers({
    DialogsPageReducer: DialogsPageReducer,
    PostsPageReducer: PostsPageReducer,
    usersReducer: UsersReducers
})

export const reduxStore =createStore(rootReducer)
// export type RootState= ReturnType<typeof store.getState>

export type RootState= ReturnType<typeof rootReducer>
export type RootDispatch=typeof reduxStore.dispatch

// @ts-ignore
window.store=reduxStore