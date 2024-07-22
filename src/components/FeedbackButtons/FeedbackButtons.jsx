import React, {Component} from "react";
import PropTypes from 'prop-types';
import styles from './FeedbackButtons.module.css'

export default class FeedbackOptions extends Component {
    render() {
        const { options, onLeaveFeedback } = this.props;
    return (
        <div>
            {Object.keys(options).map(option => (
                <button
                className={(styles["option-button"])}
                key={option}
                type="button"
                onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}
        </div>
    )}
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}

