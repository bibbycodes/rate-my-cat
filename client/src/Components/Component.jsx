import React, { Component } from "react";
import Axios from 'axios';

class Template extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message : "this is a template component",
      urls : []
    }
  }

  handleRequest = async () => {
    let response = await Axios.get('/cats')
    let data = response.data
    let urls = []
    for (let i = 0; i < data.length; i++ ) {
      urls.push(data[i].url)
      console.log(data[i].url)
    }
    this.setState({urls : urls})
    console.log(this.state.urls)
  }

  componentDidMount = async () => {
    await this.handleRequest()
  }

  render () {
    return (
      <div>
        {this.state.urls.map((url, index) => {
          return (
            <img key={index} src={url}></img>
          )
        })}
        <p>{this.state.message}</p>
        <p>{this.state.response}</p>
      </div>

    )
  }
}

export default Template