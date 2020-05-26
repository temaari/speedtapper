import React from 'react';
import './App.css';
import Timer from 'react-compound-timer'

class App extends React.Component {

  state = {
    counter: 0,
  }

  addCount = () => {
    this.setState({ counter: this.state.counter + 1 })
  }

  render() {

    return(
      <div className="app">
        <h2>Speed Tap</h2>
        <Timer
          initialTime={15000}
          direction="backward"
          startImmediately={false}
          onStart={() => {
            console.log('onStart hook')
          }}
          onReset={() => {
            console.log('onReset hook')
            this.setState({ counter: 0})
          }}
        >
          {({ start, reset }) => (
              <React.Fragment>
                  <div>
                      <Timer.Seconds /> seconds
                  </div>
                  <br />
                  <div>
                      <button 
                        className="timerButton"   
                        onClick={start}>Start
                      </button>
                      <button 
                        className="timerButton" 
                        onClick={reset}>Reset
                      </button>
                  </div>
                  {/* {
                    Timer.Seconds === 0 ? console.log("finished") :
                  } */}
              </React.Fragment>
          )}
        </Timer>
        <div>
          <p>Welcome to the speed game of the century, you have 15 seconds to tap the screen and see how many taps per second you can get</p>
        </div>
        <div>
          <p className="counter">{this.state.counter}</p><br/>
          <button className="counterButton" onClick={this.addCount}>Tap Screen</button>
        </div>
      </div>
    );
  }
}

export default App;