import styles from './style';
import React, { PropTypes } from 'react';

const Button = props => {
	return (
		<button className={styles.component} {...props}>
			{props.label}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
}

export default Button;
