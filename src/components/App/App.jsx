import React, { Component } from 'react';
import { FeedbackOptions } from '../FeedbackButtons/FeedbackButtons';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';
import styles from './Container.module.css';

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
    <div className={(styles['container'])}>

        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={options}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback !== 0 ? (
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
          >
          </Statistics>
          ) : (
            <Notification message="There is no feedback"/>
          )}
        </Section>
      </div>
  )
}
};
