// import React from 'react';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import Categories from "../Components/Categories"
// import App from "../App"
// import auth from '../Components/SignIn/auth'
// import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
// export const MContext = React.createContext();  //exporting context object
import { connect } from "react-redux";
import { Action } from "../Redux/Actions/Action"; 
const mapDispatchToProps = dispatch => ({
    insertData: (obj) => dispatch(Action(obj))
}) 
// connect(null, mapDispatchToProps);
class Count extends Component {
    // constructor(props) {
    //     super(props)
    
        // this.state = {
             
        // }
    // }
    clickHandler = () =>{
        this.props.insertData(this.props.items);
        // history.push("/categories");
        // window.location.href = "/categories";
        console.log(this.props.items)
    }
    
    render() {
        const items = this.props.items;
        // console.log(this.props.names)
        const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
            <p>
            {/* {item.text} */}
            <input type="input" id={item.key} value={item.text} />
            </p>
        </div>})
  return( 
  <div>
      {listItems}
      <Router>
      <Link to= "/categories" 
      className = "menu-link">
      <button onClick = {this.clickHandler}>GO TO COUNT</button>
        </Link>
        <Switch>
            {/* <Route exact path = "/" component = {App} /> */}
            <Route exact path = "/categories" component = {Categories} />
        </Switch>
      </Router>
      {/* {listItems} */}
  </div>
  )
    }
}
export default connect(null, mapDispatchToProps )(Count);
