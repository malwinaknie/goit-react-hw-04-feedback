import React, {Component} from "react";

class Counter extends Component {
    constructor(props) {
        super(props);
    this.state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    }

      incrementGood = () => {
        this.setState({good: this.state.good + 1});
      };
      incrementNeutral = () => {
        this.setState({neutral: this.state.neutral + 1});
      };
      incrementBad = () => {
        this.setState({bad: this.state.bad + 1});
      };

        render() {
        const {good, neutral, bad} = this.state;

        return (
                <div>
                    <div>
                    <button onClick={this.incrementGood}>Good</button>
                    <button onClick={this.incrementNeutral}>Neutral</button>
                    <button onClick={this.incrementBad}>Bad</button>
                    </div>
                    <div>
                    <h4>Statistics</h4>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total:</p>
                    <p>Positive feedback:</p>
                    </div>
                </div>
            )
        }
    }


export default Counter;