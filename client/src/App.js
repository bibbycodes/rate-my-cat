import React from 'react';
import RatingsContainer from './Components/RatingsContainer'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message : "This is a Template"
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Client</h1>
        <RatingsContainer/>
      </div>
    );
  }
}

export default App;
