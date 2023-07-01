import React from 'react';
import { GlobalStyles } from 'utils/GlobalStyles';
import { Component } from 'react';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';
import Section from './Section';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateStatistics = option => {
    this.setState(prevValue => ({
        [option]: prevValue[option] + 1,
      })
    );
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    return Math.round(
        (good /
          (good + neutral + bad)) *
          100
      )};

  render() {
    const { good, neutral, bad } = this.state
    const hasFeedback = good || neutral || bad;
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={(option) => this.onUpdateStatistics(option)}
            options={Object.keys(this.state)}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={`${this.countPositiveFeedbackPercentage()}%`}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
        <GlobalStyles />
      </>
    );
  }
}
