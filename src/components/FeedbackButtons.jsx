import React from "react";
import PropTypes from 'prop-types';

export const FeedbackButtons = ({options, counter}) => {
    return (
        <div>
            {options.map(option => (
                <button
                key={option}
                type="button"
                onClick={() => counter(option)}>
                    {option}
                </button>
            ))}
        </div>
    )
}

FeedbackButtons.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    counter: PropTypes.func.isRequired,
}