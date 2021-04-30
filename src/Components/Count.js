import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
import StringCount from "./StringCount"
import { connect } from "react-redux";
import { Action } from "../Redux/Actions/Action"; 
const mapDispatchToProps = dispatch => ({
    insertData: (obj) => dispatch(Action(obj))
}) 
// connect(null, mapDispatchToProps);
class Count extends Component {
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
      <Link to= "/stringcount" 
      className = "menu-link">
      <button onClick = {this.clickHandler}>SUBMIT</button>
        </Link>
        <Switch>
            <Route exact path = "/stringcount" component = {StringCount} />
        </Switch>
      </Router>
  </div>
  )
    }
}
export default connect(null, mapDispatchToProps )(Count);
