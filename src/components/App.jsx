import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackButtons';
import { Statistics } from './Statistics';
import { Section } from './Section';

export class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  onLeaveFeedback = state => {
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
  const positivePercentage = this.countPositiveFeedbackPercentage();
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

        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
            >
            </Statistics>
        </Section>
      </div>
  )
}
};
