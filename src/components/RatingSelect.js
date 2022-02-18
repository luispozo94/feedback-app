import React,{useContext} from 'react';
import FeedbackContext from '../context/FeedbackContext';

const RatingSelect = ({ select, selected }) => {
	//  const { feedback } = useContext(FeedbackContext);
	//initialize a func to handle the change of the rating
	const handleChange = (e) => {
		//currentTarget is the element that triggered the event
		select(+e.currentTarget.value); // + turns string into number
	};
	return (
		<ul className="rating">
			{Array.from({ length: 10 }, (_, i) => (
				<li key={`rating-${i + 1}`}>
					<input
						type="radio"
						id={`num${i + 1}`}
						name="rating"
						value={i + 1}
						onChange={handleChange}
						checked={selected === i + 1}
					/>
					<label htmlFor={`num${i + 1}`}>{i + 1}</label>
				</li>
			))}
		</ul>
	);
};

export default RatingSelect;
