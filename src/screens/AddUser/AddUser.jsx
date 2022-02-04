import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';
import { useDispatch } from 'react-redux';
import { DashboardLayout, Form } from '../../components';
import { usersOperations } from '../../redux/users';

function AddUser() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [city, setCity] = useState('');

	const onChangeHandler = (fieldName, value) => {
		switch (fieldName) {
			case 'name':
				setName(value);
				break;
			case 'username':
				setUsername(value);
				break;
			case 'email':
				setEmail(value);
				break;
			case 'city':
				setCity(value);
				break;

			default:
				break;
		}
	};

	const cancelBtnHandler = () => {
		navigate('/');
	};

	const submitHandler = async (e) => {
		e.preventDefault();

		if (!name.trim() || !username.trim()) return;
		// TODO show notification

		const formData = {
			name: name.trim(),
			username: username.trim(),
			email: email.trim(),
			address: { city: city.trim() },
		};

		dispatch(usersOperations.addUser(formData));

		cancelBtnHandler();
	};

	const formdata = {
		name,
		username,
		email,
		city,
		submitHandler,
		onChangeHandler,
		cancelBtnHandler,
	};

	return (
		<DashboardLayout>
			<Paper>
				<Grid container>
					<Grid container mx={2} justifyContent="space-between" alignItems="center">
						<h2>Add new user</h2>
					</Grid>
					<Grid container mx={2}>
						<Form formdata={formdata} />
					</Grid>
				</Grid>
			</Paper>
		</DashboardLayout>
	);
}

export default AddUser;
