import React from 'react'
import css from './Notification.module.css'

export const Notification = ({ title }) => {
  return (
    <div className={css.notificationTitle}>{title}</div>
  )
}
