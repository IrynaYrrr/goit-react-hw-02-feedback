import React from 'react';
// import css from "./Feedback.module.css";
// import PropTypes from 'prop-types';

export default function Feedback({ good, neutral, bad }) {
  return (
    <div>
      <button>good</button>
      <button>neutral</button>
      <button>bad</button>
    </div>
  )
}
