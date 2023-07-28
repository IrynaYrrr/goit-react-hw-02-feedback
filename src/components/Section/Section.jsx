import React from 'react'
import css from './Section.module.css'

export const Section = ({ titleStatistics, titleFeedback }) => {
  return (
    <div>
      <div className={css.titleFeedback}>{titleFeedback}</div>
      <div className={css.titleStatistics}>{titleStatistics}</div>
    </div>
  )
}
