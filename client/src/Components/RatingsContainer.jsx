import React, { Component } from "react";
import Axios from 'axios';

class RatingsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url : ""
    }
  }

  handleRequest = async () => {
    let response = await Axios.get('/cats/random')
    let data = response.data[0]
    let url = data.url
    this.setState({url})
  }

  componentDidMount = async () => {
    await this.handleRequest()
  }

  render () {
    return (
      <div>
         <img src={this.state.url}></img>
      </div>

    )
  }
}

export default RatingsContainer