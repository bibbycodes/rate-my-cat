import React from 'react';
import RatingsContainer from './Components/RatingsContainer'
import '../src/style.css';

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
        <RatingsContainer/>
      </div>
    );
  }
}

export default App;
