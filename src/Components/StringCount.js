import React, { Component } from 'react'
import '../App.css';
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  names: state.Reducer.names
})  
export class StringCount extends Component {
    render() {
        // console.log(this.props.names);
        const unique = [...new Set(this.props.names.map(item => item.text))]; //Getting unique names
        // console.log(unique);
        const result = unique.map((data) => {
            const nameCounting = this.props.names.filter((name) => name.text === data).length //Counting the names
            return {
                name: data,
                count: nameCounting
            }
        })
        console.log(result);
        // const { names } = this.props
		return (
			<div className = 'names-count'>
            <h1>Counting Names</h1>
                  {
					result.map(data => <div className = 'names-countInner' key = {data.count}>
                        <div> {data.name} 
                        <span className = 'names-countInnerSpan'>{data.count} </span></div>
                    </div>)
				  }
         	</div>
		)
        
    }
}
export default connect(mapStateToProps)(StringCount);
