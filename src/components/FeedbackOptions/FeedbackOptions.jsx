import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <button type="button" onClick={onLeaveFeedback} data-option="good">
        Good
      </button>
      <button type="button" onClick={onLeaveFeedback} data-option="neutral">
        Neutral
      </button>
      <button type="button" onClick={onLeaveFeedback} data-option="bad">
        Bad
      </button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}
