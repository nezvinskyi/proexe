import PropTypes from 'prop-types';
import { TextField, Box, Button } from '@mui/material';

function Form({ formdata }) {
	const { name, username, email, city, submitHandler, onChangeHandler, cancelBtnHandler } =
		formdata;

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
				onChange={(e) => onChangeHandler('name', e.target.value)}
			/>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				required
				label="Username"
				value={username}
				onChange={(e) => onChangeHandler('username', e.target.value)}
			/>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				label="Email address"
				value={email}
				type="email"
				onChange={(e) => onChangeHandler('email', e.target.value)}
			/>
			<TextField
				sx={{
					marginBottom: 2,
				}}
				fullWidth
				label="City"
				value={city}
				onChange={(e) => onChangeHandler('city', e.target.value)}
			/>

			<Box
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

Form.propTypes = {
	formdata: PropTypes.shape({
		name: PropTypes.string,
		username: PropTypes.string,
		email: PropTypes.string,
		city: PropTypes.string,
		submitHandler: PropTypes.func,
		onChangeHandler: PropTypes.func,
		cancelBtnHandler: PropTypes.func,
	}).isRequired,
};

export default Form;
