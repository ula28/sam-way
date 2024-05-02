import React from "react";
import './App.css';
import {Header} from "./components/header/Header";
import {Navbar} from "./components/navbar/Navbar";

import { RoadMap} from "./components/roadmap/RoadMap";
import {T_store} from "./components/data/data";

class  App extends React.Component<{  store:T_store }>{
    render(){
        const{store}=this.props
        return (
            <div className="app_wrapper">
                <Header/>
                <Navbar users={store.getState().dialogsPage.users}/>
                <div className="app_wrapper_content">
                    <RoadMap data={store.getState()}
                             // addPost={store.addPost}
                             // changePostValue={store.changePostValue}
                        dispatch={store.dispatch.bind(store)}
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
