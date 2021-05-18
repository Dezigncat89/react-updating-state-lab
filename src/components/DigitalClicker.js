import React from "react"

class DigitalClicker extends React.Component {
  constructor() {
     super()
     this.state = {
     timesClicked: 0
     }
     this.handleClicked = this.handleClicked.bind(this)
   }

   handleClicked() {
     this.setState((prevState => {
         return {
           timesClicked: preState.timesClicked + 1
         }
     })
  }

render() {
  return (
    <div>
      <h1>{this.state.timesClicked}</h1>
      <button onClicked={this.handleClicked}>Start Count</button>
    </div>
    )
  }
}

{<YouTubeDebugger/>}

export default DigitalClicker
