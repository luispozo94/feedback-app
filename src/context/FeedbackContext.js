import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();

//setting up yhe context provider => accepts the children
export const FeedbackProvider = ({ children }) => {
	console.log('this is children', children);

	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'This item is from context',
			rating: 10,
		},
		{
			id: 2,
			text: 'This item is from context',
			rating: 8,
		},
		{
			id: 3,
			text: 'This item is from context',
			rating: 5,
		},
	]);
	const [feedbackEdit, setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	//!update a feedback
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};
	//!add a new feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4(); //added an id
		setFeedback([newFeedback, ...feedback]); //push new feedback to the feedback array
	};

	//!delete a feedback
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure you want to delete this feedback?')) {
			setFeedback(feedback.filter((item) => item.id !== id));
		}
	};

	const updatedFeedback = (id, updItem) => {
		setFeedback(feedback.map((item) => (item.id === id ? { ...item, ...updItem } : { item })));
	};
	/*passing the state and functions to the context value prop.
  children is passing the data being passed from the components
  */
	return (
		<FeedbackContext.Provider
			value={{ feedback, feedbackEdit, deleteFeedback, addFeedback, editFeedback, updatedFeedback }}
		>
			{children}
		</FeedbackContext.Provider>
	);
};
export default FeedbackContext;
