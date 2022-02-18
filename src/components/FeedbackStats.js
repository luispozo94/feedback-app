import React, { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackStats = () => {
	const { feedback } = useContext(FeedbackContext); //accessing the feedback state from the context
	//calculate average rating
	let averageRating = feedback.reduce((total, item) => total + item.rating, 0) / feedback.length;
	averageRating = averageRating.toFixed(1).replace(/[.,]0$/, ''); //removing trailing zeros

	return (
		<div className="feedback-stats">
			<h4>{feedback.length} Reviews</h4>
			<h4>Average Rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
		</div>
	);
};

export default FeedbackStats;
