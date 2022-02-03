import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Box, Button } from '@mui/material';

function Form() {
	const navigate = useNavigate();
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [city, setCity] = useState('');

	const cancelBtnHandler = () => {
		navigate('/');
	};

	const submitHandler = (e) => {
		e.preventDefault();

		if (!name.trim() || !username.trim()) return;
		// TODO throw notification

		const formData = {
			name: name.trim(),
			username: username.trim(),
			email: email.trim(),
			city: city.trim(),
		};
		console.log(formData);
	};

	return (
		<form onSubmit={submitHandler}>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				label="Name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				required
				label="Username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
			/>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				label="Email address"
				value={email}
				type="email"
				onChange={(e) => setEmail(e.target.value)}
			/>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				label="City"
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>

			<Box
				variant="contained"
				display="flex"
				justifyContent="space-between"
				sx={{
					marginBottom: 2,
				}}
			>
				<Button type="button" variant="outlined" onClick={cancelBtnHandler}>
					Cancel
				</Button>
				<Button color="success" type="submit" variant="contained">
					Submit
				</Button>
			</Box>
		</form>
	);
}

export default Form;
