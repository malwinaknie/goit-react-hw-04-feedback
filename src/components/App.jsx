import React, { Component } from 'react';
import { FeedbackButtons } from './FeedbackButtons';
import { Statistics } from './Statistics';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  counter = state => {
    this.setState(prevState => ({
      [state]: prevState[state] + 1
    }));
  };

countTotalFeedback = () => {
  const {good, neutral, bad} = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
  const {good} = this.state;
  const total = this.countTotalFeedback();

  return Math.round((good / total) * 100);
};

render() {
  const {good, neutral, bad} = this.state;
  const options = Object.keys(this.state);
  const totalFeedback = this.countTotalFeedback();
  const positiveFeedback = this.countPositiveFeedbackPercentage();
  return (
    <div
    style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
      gap: 10,
    }}>
      <div>
      <h4>Please leave feedback</h4>
      <FeedbackButtons
      counter={this.counter}
      options={options}>
      </FeedbackButtons>
      </div>
      <div>
        <h4>Statistics</h4>
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
          >
          </Statistics>
      </div>
    </div>
  )
}
};
