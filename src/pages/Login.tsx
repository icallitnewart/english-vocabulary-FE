import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userTokenState } from '../recoil/userState';
import styles from '../components/Login/Login.module.scss';
import Navigation from '../components/common/Navigation/Navigation';
import Logo from '../components/common/Logo/Logo';
import LoginForm from '../components/Login/LoginForm';

function Login() {
	const userToken = useRecoilValue(userTokenState);
	const navigate = useNavigate();
	const logoStyle = {
		transform: 'translateX(-10px)',
		marginBottom: '5vh',
	};

	useEffect(() => {
		if (userToken) navigate('/user/info');
	}, []);

	return (
		<>
			<Navigation />
			<main className={styles.container}>
				<Logo style={logoStyle} />
				<LoginForm />
			</main>
		</>
	);
}

export default Login;
