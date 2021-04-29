import React from 'react';
import logo from './logo.svg';
import './App.css';
// import auth from "./Components/SignIn/auth"
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Count from './Components/Count';
import Categories from './Components/Categories';
// import { connect } from "react-redux";
// import { Action } from "./Redux/Actions/Action";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      items:[],
      currentItem:{
        text:'',
        key:''
      }
    }
    this.addItem = this.addItem.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  addItem(e){
    e.preventDefault();
    const newItem = this.state.currentItem;
    if(newItem.text !==""){
      const items = [...this.state.items, newItem];
    this.setState({
      items: items,
      currentItem:{
        text:'',
        key:''
      }
    })
    // console.log(this.items)
    }
    // console.log(this.items)
  }
  handleInput(e){
    this.setState({
      currentItem:{
        text: e.target.value,
        key: Date.now()
      }
    })
    // console.log(this.items)
  }
 render(){
  //  console.log(this.props.history);
  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={this.addItem}>
          <input type="text" placeholder="Enter the Name" value= {this.state.currentItem.text} onChange={this.handleInput}></input>
          <button type="submit">Add</button>
        </form>
        <p>{this.state.items.text}</p>
          <Count items={this.state.items}/>   
      </header>
      {/* <Router>
        <Switch>  */}
        {/* <Route exact path = "/categories" component = {Categories} /> */}
        {/* <Route exact path = "/" component = {Home} /> */}
        {/* </Switch>
        </Router> */}
    </div>
  );
 }
}
export default App;
