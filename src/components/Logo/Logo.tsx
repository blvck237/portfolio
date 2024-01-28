import React from 'react';
import styles from './Logo.module.css';
import logo from '../../assets/images/logo.png';
interface LogoProps {
	className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = '' }) => {
	const classes = [styles.logo, className].join(' ');
	return <img src={logo} alt="Logo" className={classes} />;
};

export default Logo;
