import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';

const FeedbackItem = (item) => {
	//accessing the deleteFeedback from feedback state from the context
	const { deleteFeedback } = useContext(FeedbackContext);
	return (
		<Card>
			<div className="num-display">{item.rating}</div>
			<button onClick={() => deleteFeedback(item.id)} className="close">
				<FaTimes color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
};

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};
export default FeedbackItem;
