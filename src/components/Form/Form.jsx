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
		const formData = { name, username, email, city };
		console.log(formData);
	};

	return (
		<form onSubmit={submitHandler}>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				required
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

			<Box variant="contained" display="flex" justifyContent="space-between">
				<Button type="button" onClick={cancelBtnHandler}>
					Cancel
				</Button>
				<Button color="success" type="submit">
					Submit
				</Button>
			</Box>
		</form>
	);
}

export default Form;
