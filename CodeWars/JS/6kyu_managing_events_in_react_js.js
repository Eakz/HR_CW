// https://www.codewars.com/kata/5a8319f257c562ede8000037/train/javascript

const React = require('react');

class Counter extends React.Component{
  constructor(props) {
      super(props);
// Your state
    this.state={counter:0}
  }
// Your event handlers 

  render() {
    return (
      <div>
        <h1 id={"counter"}>{this.state.counter}</h1>
          <button id={"decrement"} onClick={()=>{this.setState({counter:this.state.counter-1})}} type="button">
            Decrement
          </button>
          <button id={"increment"} onClick={()=>{this.setState({counter:this.state.counter+1})}} type="button">
            Increment
          </button>
      </div>
    )
  }
}