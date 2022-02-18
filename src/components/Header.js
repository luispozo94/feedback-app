import PropTypes from 'prop-types';

const Header = ({ bgColor, textColor }) => {

	const headerStyle = {
		backgroundColor: bgColor,
		color: textColor,
	};

	return (
		<header style={headerStyle}>
			<div className="container">
				<h2>Feedback UI</h2>
			</div>
		</header>
	);
};

Header.defaultProps = {
	bgColor: 'rbga(0,0,0,0.4)', 
	textColor: '#ff6a95',
}

Header.propTypes = {
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
}


export default Header;
