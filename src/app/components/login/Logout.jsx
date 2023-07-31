import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/actions/user';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

const Logout = () => {
	let history = useNavigate();
	const dispatch = useDispatch()
	useEffect(
		() => {
			dispatch(showLoading())
			localStorage.removeItem('access_token');
			localStorage.removeItem('access_token');
			localStorage.removeItem('phone');
			dispatch(clearUser())
			dispatch(hideLoading())
			history('/', { replace: true });
		},
		[ history ]
	);

	return null;
};

export default Logout;
