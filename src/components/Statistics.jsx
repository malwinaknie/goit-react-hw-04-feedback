import React from "react";
import PropTypes from 'prop-types'

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positiveFeedback,
}) => {
    return (
        <list>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive feedback: {positiveFeedback}%</li>
        </list>
    )
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positiveFeedback: PropTypes.number.isRequired,
}