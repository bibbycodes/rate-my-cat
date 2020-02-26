import React, { Component } from "react";
import Axios from 'axios';
// import star from '../../public/star.png';

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

  handleRating = (rating) => {
    // rating.preventDefault()
    console.log(rating)
  }

  componentDidMount = async () => {
    await this.handleImage()
  }

  render () {
    return (
      <div>
        <h1>Rate My Cat</h1>
         <img class="random-image" src={this.state.url}></img>
         <br></br>
           <img src={`${window.location.origin}/star.png`} class="star" onClick={(rating) => this.handleRating(1)}></img>
           <img src={`${window.location.origin}/star.png`} class="star" onClick={(rating) => this.handleRating(2)}></img>
           <img src={`${window.location.origin}/star.png`} class="star" onClick={(rating) => this.handleRating(3)}></img>
           <img src={`${window.location.origin}/star.png`} class="star" onClick={(rating) => this.handleRating(4)}></img>
           <img src={`${window.location.origin}/star.png`} class="star" onClick={(rating) => this.handleRating(5)}></img>
      </div>

    )
  }
}

export default RatingsContainer