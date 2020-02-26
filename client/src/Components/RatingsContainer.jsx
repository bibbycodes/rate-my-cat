import React, { Component } from "react";
import Axios from 'axios';

class RatingsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url : ""
    }
  }

  handleImage = async () => {
    let response = await Axios.get('/cats/random')
    let data = response.data[0]
    let url = data.url
    this.setState({url})
  }

  componentDidMount = async () => {
    await this.handleImage()
  }

  render () {
    return (
      <div>
        <h1>Rate My Cat</h1>
         <img class="random-image" src={this.state.url}></img>
         <table>
           <th>1</th>
           <th>2</th>
           <th>3</th>
           <th>4</th>
           <th>5</th>
         </table>
      </div>

    )
  }
}

export default RatingsContainer