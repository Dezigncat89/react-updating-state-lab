import React, {Component} from "react"

class YoutubeDebugger extends Component {
  constructor() {
    super()
    this.state = {
       errors: [],
       user: null,
  settings: {
  bitrate: 8,
  video: {
  resolution: '1080p'
  }
  this.handleChange = this.handleChange.bind(this)
}

 handleClick() {
   this.setState((prevState => {
     return {
       bitrate: preState.bitrate + 4
     }

   })
}
render() {
  return (
    <div>
       <h1>{console.log(this.props.bitrate}</h1>
       <button onClick={this.handleClick}>Current Value</button>
    </div>
   )
   }
}
  
  handleClick() {
    this.setState((prevState => {
      return {
        video.resolution: preState.video.resolution - 360
      }

   })
}
render() {
  return (
    <div>
       <h1>{console.log(this.props.settings.video.resolution}</h1>
       <button onClick={this.handleClick}>Current Value</button>
    </div>
   )
   }
}

