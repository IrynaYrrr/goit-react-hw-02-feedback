import React, { Component } from "react";
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };


  handleGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      }
    })
  }

  handleNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      }
    })
  }

  handleBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1
      }
    })
  }

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const persentage = Math.round(this.state.good / this.countTotalFeedback() * 100)
    return isNaN(persentage) ? 0 : persentage
  }


  render() {

    return (
      <div style={{
        height: '40vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>

        <Section titleFeedback='Please leave feedback' />

        <FeedbackOptions
          good={this.handleGood}
          neutral={this.handleNeutral}
          bad={this.handleBad}
        />

        <Section titleStatistics='Statistics' />

        {this.countTotalFeedback() !== 0
          ?
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
          :
          <Notification titleNotification='There is no feedback' />}
      </div>
    );
  }
}
