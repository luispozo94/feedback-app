import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import Card from './shared/Card';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';

const FeedbackForm = () => {
	const { addFeedback, feedbackEdit, updatedFeedback } = useContext(FeedbackContext);

	const [rating, setRating] = useState(10);
	const [text, setText] = useState('');
	const [btnDisabled, setBtnDisabled] = useState(true);
	const [message, setMessage] = useState('');

	useEffect(() => {
		if (feedbackEdit.edit) {
			//if true
			setBtnDisabled(false);
			setRating(feedbackEdit.item.rating); //add rating
			setText(feedbackEdit.item.text); //add text
		}
	}, [feedbackEdit]);

	//validation
	const handleTextChange = (e) => {
		if (text === '') {
			setBtnDisabled(true);
			setMessage(null);
		} else if (text !== '' && text.trim().length <= 10) {
			setMessage('Text must be at least 10 characters long');
			setBtnDisabled(true);
		} else {
			setMessage(null);
			setBtnDisabled(false);
		}
		setText(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			};
			if (feedbackEdit.edit === true) {
				updatedFeedback(feedbackEdit.item.id, newFeedback);
			} else {
				addFeedback(newFeedback); //push new feedback to the feedback array
			}
			setText('');
		}
	};

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>How would you rate our service</h2>
				<RatingSelect selected={rating} select={setRating} />
				<div className="input-group">
					<input
						onChange={handleTextChange}
						type="text"
						placeholder="Write a review"
						value={text}
					/>
					<Button type="submit" isDisabled={btnDisabled}>
						Send
					</Button>
				</div>
				{message && <div className="message">{message}</div>}
			</form>
		</Card>
	);
};

export default FeedbackForm;
