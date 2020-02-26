import React, { Component } from "react";
import Axios from 'axios';

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message : "this is a template component",
      response : ""
    }
  }

  handleRequest = async () => {
    let response = await Axios.get('/home')
    console.log(response)
    this.setState({response : response.data.message})
  }

  componentDidMount() {
    this.handleRequest()
  }

  render () {
    return (
      <div>
        <p>{this.state.message}</p>
        <p>{this.state.response}</p>
      </div>

    )
  }
}

export default Template