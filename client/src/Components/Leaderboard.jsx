import React, { Component } from "react";
import Axios from 'axios';

class LeaderBoard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ratings: []
    }
  }

  fetchRatings = async () => {
    let response = await Axios.get('/ratings/all')
    this.setState({ratings :  response.data})
  }

  componentDidMount = async () => {
    await this.fetchRatings()
  }

  render () {
    return (
      <div>
        <h1>Leader Board</h1>
        {this.state.ratings.map((item, index) => {
          return (
            <div key={index} className="leaderboard">
              <p>
                Rating: {item.rating}
                <img className="leaderboard-image" src={item.url}></img>
              </p>
            </div>
          )
        })}
      </div>

    )
  }
}

export default LeaderBoard