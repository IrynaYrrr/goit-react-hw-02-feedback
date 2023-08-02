import React from 'react'
import css from './FeedbackOptions.module.css'
import clsx from "clsx"

export const FeedbackOptions = ({ feedbackBtn, good, neutral, bad }) => {
  return (
    <div className={css.feedbackButtons}>
      <button onClick={good} type="button" className={clsx(css[feedbackBtn], [css.goodBtn])}>
        good
      </button>
      <button onClick={neutral} type="button" className={clsx(css[feedbackBtn], [css.neutralBtn])}>
        neutral
      </button>
      <button onClick={bad} type="button" className={clsx(css[feedbackBtn], [css.badBtn])}>
        bad
      </button>
    </div>
  )
}