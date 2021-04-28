import React, { Component } from 'react'
// import names from '../Redux/Reducers/Reducer'
import { connect } from "react-redux";
export class Categories extends Component {
    constructor(props) {
        super(props)
      }
    render() {
        console.log(this.props);
        // functionality
        return (
            <div>
                <h1>Welcome Categories</h1>
                {/* retun data */}
                
            </div>
        )
    }
}

// export default Categories
const mapStateToProps = (state) => {
    return {
      names: state.Reducer.names
    //   customer: state.CustomerReducer.customer
    };
  };
  
export default connect(mapStateToProps)(Categories);
