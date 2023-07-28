import React from 'react'
import css from './Notification.module.css'

export const Notification = ({ titleNotification }) => {
  return (
    <div className={css.notificationTitle}>{titleNotification}</div>
  )
}
