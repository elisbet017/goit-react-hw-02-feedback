import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button type="button" onClick={onLeaveFeedback} data-option="good">
        Good
      </Button>
      <Button type="button" onClick={onLeaveFeedback} data-option="neutral">
        Neutral
      </Button>
      <Button type="button" onClick={onLeaveFeedback} data-option="bad">
        Bad
      </Button>
    </>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
}
