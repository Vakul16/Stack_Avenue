// import React from 'react';
import React, { Component } from 'react'
// import auth from '../Components/SignIn/auth'
// import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";
// export const MContext = React.createContext();  //exporting context object
import { connect } from "react-redux";
import { Action } from "../Redux/Actions/Action";

class Count extends Component {
    constructor(props) {
        super(props)
    
        // this.state = {
             
        // }
    }
    clickHandler = () =>{
        this.props.Action(this.props.items);
        // history.push("/categories");
        window.location.href = "/categories";
        console.log(this.props)
    }
    
    render() {
        const items = this.props.items;
        const listItems = items.map(item =>
        {
            return <div className="list" key={item.key}>
            <p>
            {/* {item.text} */}
            <input readonly type="input" id={item.key} value={item.text} />
            </p>
        </div>})
  return <div>
      {listItems}
      {/* <Router>
        <Switch>  */}
      {/* <Route path = "/" component = {Home} /> */}
      {/* <Route path="/" render={(props) => <Home {...props} />} /> */}
      <button onClick = {this.clickHandler}>GO TO COUNT</button>
      {/* </Switch>
      </Router> */}
  </div>
    }
}

// const Home = (props) => (
//   <div>
//   <button
// onClick={() => {
//   console.log(props)
//   // props.Action(props.items)
//     auth.login(() => {
//     props.history.push("/categories");
//     // console.log(props.history)
//   });
// }}>
//   Go To Count</button>
//   </div>
// )
// export default Count
export default connect(null, { Action })(Count);
