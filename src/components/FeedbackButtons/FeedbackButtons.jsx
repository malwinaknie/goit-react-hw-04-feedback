import React from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackButtons.module.css'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <div>
            {options.map(option => (
                <button
                className={(styles["option-button"])}
                key={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}