import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <Button
        type="button"
        onClick={() => onLeaveFeedback(options[0])}
      >
        Good
      </Button>
      <Button
        type="button"
        onClick={() => onLeaveFeedback(options[1])}
      >
        Neutral
      </Button>
      <Button
        type="button"
        onClick={() => onLeaveFeedback(options[2])}
      >
        Bad
      </Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired,).isRequired,
}
