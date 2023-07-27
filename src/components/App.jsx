import React, { Component } from "react";

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

  countTotalFeedback(){
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage(){

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

        <span className='title-feedback'>Please leave feedback:</span>

        <button onClick={this.handleGood} type="button" className='feedback-btn good-btn'>good: {this.state.good}</button>
        <button onClick={this.handleNeutral} type="button" className='feedback-btn neutral-btn'>neutral: {this.state.neutral}</button>
        <button onClick={this.handleBad} type="button" className='feedback-btn bad-btn'>bad: {this.state.bad}</button>

        <span className='total-feedback'>Total: {this.countTotalFeedback()}</span>
        <span className='positive-feedback'>Positive feedback: {this.countPositiveFeedbackPercentage()} %</span>

      </div>
    );
  }
}
