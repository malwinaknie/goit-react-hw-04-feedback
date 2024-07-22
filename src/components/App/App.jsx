import React, { useState } from 'react';
import FeedbackOptions from '../FeedbackButtons/FeedbackButtons';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section'
import Notification from '../Notification/Notification';
import styles from './Container.module.css';

const App = () => {
const [feedback, setFeedback] = useState({good: 0, neutral: 0, bad: 0});

const handleAnswer = category => {
  setFeedback(prevState => ({
    ...prevState,
    [category]: prevState[category] + 1,
  }));
};

const countTotalFeedback = () => {
  const {good, neutral, bad} = feedback;
  return good + neutral + bad;
};

const countPositiveFeedbackPercentage = () => {
  const {good} = feedback;
  const total = countTotalFeedback();
  if(total === 0) {
    return 0;
  }
  return Math.round((good / total) * 100);
};

const total = countTotalFeedback();
const positivePercentage = countPositiveFeedbackPercentage();

  return (
    <div className={(styles['container'])}>

        <Section title="Please leave feedback">
          <FeedbackOptions
            onLeaveFeedback={handleAnswer}
            options={feedback}
          />
        </Section>

        <Section title="Statistics">
          {total === 0 ? (
            <Notification message="There is no feedback"/>
          ) : (
            <Statistics
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          total={total}
          positivePercentage={positivePercentage}
          >
          </Statistics>
          )}
        </Section>
      </div>
  );
};

export default App;
