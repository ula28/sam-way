import React from "react";
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";

import { RoadMap} from "./components/roadmap/RoadMap";
// import {store, T_data, T_store} from "./components/data/data";
// import {reduxStore, RootDispatch} from "./components/data/redux/store";
import {NavbarContainer} from "./components/navbar/NavbarContainer";

class  App extends React.Component
//     <
//     { state:T_data}
// >
{
    render(){
        // const{state}=this.props
        return (
            <div className="app_wrapper">
                <Header/>
                <NavbarContainer/>
                {/*<Navbar users={store.getState().dialogsPage.users}/>*/}
                <div className="app_wrapper_content">
                    <RoadMap
                        // data={state}
                             // addPost={store.addPost}
                             // changePostValue={store.changePostValue}
                        // dispatch={reduxStore.dispatch.bind(reduxStore)}
                    />
                </div>
                <Counter name={"ttt"}/>
            </div>
        )
    }
}
 class Counter extends React.Component<{name:string},{counter:number}>{
    constructor(props: { name:string }) {
        super(props);
        this.state={ counter:0}
    }
    addCounterHandler=()=>{
        this.setState((prevState)=>({counter:prevState.counter+1}))
    }
    decrement=()=>{
        this.setState(({counter:this.state.counter-1}))
    }
    render(){
        return  <div>
            <span>{this.state.counter}</span>
            <button onClick={this.addCounterHandler}>+</button>
            <button onClick={this.decrement}>-</button>
        </div>
    }
}

// function  App(props: { data:T_data, addPost:()=>void} ) {
// const{data}=props
//   return (
//     <div className="app_wrapper">
//       <Header/>
//       <Navbar users={data.dialogsPage.users}/>
//       <div className="app_wrapper_content">
//       <RoadMap data={data} addPost={addPost} />
//       </div>
//
//     </div>
//   );
// }

export default App;
