import React, { Component } from 'react';

export class Statistics extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    hasValue: false,
  };

/*   constructor() {
    super();
    this.good = this.state.good;
  }
 */
  handleChange = (event, opinion) => {

    if (opinion === "good") {
        this.state.good += 1;
    }
    if (opinion === "neutral") {
        this.state.neutral += 1;
    }
    if (opinion === "bad") {
        this.state.bad += 1;
    }
    this.setState({ hasValue: true})
  };

  countTotalFeedback = (event) => {
    const total = this.state.good + this.state.neutral + this.state.bad;

    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    const positiveFeedback = Math.round((this.state.good / total) * 100)

    return positiveFeedback
  }

  render() {
    const { good, neutral, bad, hasValue } = this.state;

    return (
      <section className="statistics">
        <h1>Please leave feedback</h1>
        <div>
          <button type="button" onClick={event => this.handleChange(event, 'good')}>Good</button>
          <button type="button" onClick={event => this.handleChange(event, 'neutral')}>Neutral</button>
          <button type="button" onClick={event => this.handleChange(event, 'bad')}>Bad</button>
        </div>
        <h2>Statistics</h2>
            {hasValue ? (
                <div>
                    <p>Good: {good}</p>
                    <p>Neutral: {neutral}</p>
                    <p>Bad: {bad}</p>
                    <p>Total: {this.countTotalFeedback()}</p>
                    <p>Positive feedback: {this.countPositiveFeedbackPercentage()}%</p>
                </div>
            ) : (
                <p>nic tu nie ma</p>
            )}
      </section>
    );
  }
}
