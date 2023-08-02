import React from 'react'
import css from './Section.module.css'

export const Section = ({ title, children }) => {
  return (
    <section>
      <div className={css.titleSection}>
        {title}
      </div>
      {children}
    </section>
  )
}
