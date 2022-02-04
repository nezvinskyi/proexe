import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Grid, Paper } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { DashboardLayout, Form } from '../../components';
import { usersOperations, usersSelectors } from '../../redux/users';

function EditUser() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { id } = useParams();
	const users = useSelector(usersSelectors.getAllUsers);
	const userToEdit = users.find((item) => item.id === +id);

	const [name, setName] = useState(userToEdit?.name);
	const [username, setUsername] = useState(userToEdit?.username);
	const [email, setEmail] = useState(userToEdit?.email);
	const [city, setCity] = useState(userToEdit?.address.city);

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

		dispatch(usersOperations.editUser(id, formData));

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
						<h2>Edit user</h2>
					</Grid>
					<Grid container mx={2}>
						<Form formdata={formdata} />
					</Grid>
				</Grid>
			</Paper>
		</DashboardLayout>
	);
}

export default EditUser;
