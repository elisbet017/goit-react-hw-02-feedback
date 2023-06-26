import React from 'react';
import { Component } from 'react';
// import PropTypes from 'prop-types';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onUpdateStatistics = e => {
    const option = e.target.dataset.option;
    this.setState(prevValue => {
      return {
        [option]: prevValue[option] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => Math.round(
        (this.state.good /
          (this.state.good + this.state.neutral + this.state.bad)) *
          100
      );

  render() {
    const hasFeedback = this.state.good || this.state.neutral || this.state.bad;
    return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onUpdateStatistics}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          {hasFeedback ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={`${this.countPositiveFeedbackPercentage()}%`}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
