import {connect} from "react-redux";
import {Navbar} from "./Navbar";
import {RootState} from "../data/redux/store";



const mapStateToProps=(state:RootState)=>{
    return{
        users:state.DialogsPageReducer.users
    }
}
export const NavbarContainer=connect(mapStateToProps)(Navbar)


