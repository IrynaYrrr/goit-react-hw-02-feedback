import React from "react";
import css from './Statistics.module.css';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={css.statWrap}>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>good: {good}</li>
        <li className={css.feedbackItem}>neutral: {neutral}</li>
        <li className={css.feedbackItem}>bad: {bad}</li>
        <li className={css.feedbackItem}>Total: {total}</li>
        <li className={css.feedbackItem}>Positive feedback: {positivePercentage}%</li>
      </ul>
    </div>
  )
}
