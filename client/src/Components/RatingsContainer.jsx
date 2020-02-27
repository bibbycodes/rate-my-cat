import React, { Component } from "react";
import Axios from 'axios';
// import star from '../../public/star.png';

class RatingsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url : "",
      rating: 0
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
    this.setState({rating})
  }

  handleSubmit = async () => {
    console.log(this.state.rating)
    let rating = this.state.rating
    let url = this.state.url
    await Axios.post('/ratings/new',{
      rating,
      url
    })
  }

  componentDidMount = async () => {
    await this.handleImage()
  }

  render () {
    return (
      <div>
        <h1>Rate My Cat</h1>
         <img className="random-image" src={this.state.url}></img>
         <br></br>
          <img src={`${window.location.origin}/star.png`} className="star" onClick={(rating) => this.handleRating(1)}></img>
          <img src={`${window.location.origin}/star.png`} className="star" onClick={(rating) => this.handleRating(2)}></img>
          <img src={`${window.location.origin}/star.png`} className="star" onClick={(rating) => this.handleRating(3)}></img>
          <img src={`${window.location.origin}/star.png`} className="star" onClick={(rating) => this.handleRating(4)}></img>
          <img src={`${window.location.origin}/star.png`} className="star" onClick={(rating) => this.handleRating(5)}></img>
          <p>{this.state.rating}</p>
        <form onSubmit={this.handleSubmit}>
         <button className="" type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default RatingsContainer