import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
	let history = useNavigate();
	useEffect(
		() => {
			history('/', { replace: true });
		},
		[ history ]
	);

	return null;
};

export default Logout;
