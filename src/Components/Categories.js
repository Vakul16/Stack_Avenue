import React, { Component } from 'react'
// import names from '../Redux/Reducers/Reducer'
import { connect } from "react-redux";
const mapStateToProps = (state) => ({
  names: state.Reducer.names
})  
export class Categories extends Component {
    render() {
        console.log(this.props.names);
        // functionality
        const unique = [...new Set(this.props.names.map(item => item.text))]; // [ 'A', 'B']
        console.log(unique);
        const result = unique.map((data) => {
            const nameCounting = this.props.names.filter((name) => name.text === data).length
            return {
                name: data,
                count: nameCounting
            }
        })
        console.log(result);
        // const { names } = this.props
		return (
			<div>
            <h1 >Categories</h1>

            <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">count</th>
    </tr>
  </thead>
  <tbody>
  {
					result.map(data => {
                        <tr>
      <td>{data.name}</td>
      <td>{data.count}</td>

    </tr>
                    })
				  }
    
  </tbody>
</table>
            
                  {/* {
					result.map(data => <h2 key = {data.count}>
                        {data.name} {data.count}
                    </h2>)
				  } */}
         	</div>
		)
        
    }
}

// export default Categories
// const mapStateToProps = (state) => ({
//   names: state.Reducer.names
// })  
export default connect(mapStateToProps)(Categories);
