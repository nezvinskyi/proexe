/* eslint-disable react/prop-types */
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { usersOperations } from '../../redux/users';

function UsersTable({ users }) {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const handleEditClick = (id) => {
		navigate(`/edit-user/${id}`);
	};

	const handleDeleteClick = (id) => {
		dispatch(usersOperations.deleteUser(id));
	};

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell align="center">Id</TableCell>
					<TableCell align="center">Name</TableCell>
					<TableCell align="center">Username</TableCell>
					<TableCell align="center">Email</TableCell>
					<TableCell align="center">City</TableCell>
					<TableCell align="center">Edit</TableCell>
					<TableCell align="center">Delete</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{users.map(({ id, name, username, email, address: { city } }) => (
					<TableRow key={id}>
						<TableCell align="center">{id}</TableCell>
						<TableCell align="center">{name}</TableCell>
						<TableCell align="center">{username}</TableCell>
						<TableCell align="center">{email}</TableCell>
						<TableCell align="center">{city}</TableCell>
						<TableCell align="center">
							<Button variant="contained" color="warning" onClick={() => handleEditClick(id)}>
								edit
							</Button>
						</TableCell>
						<TableCell align="center">
							<Button variant="contained" color="error" onClick={() => handleDeleteClick(id)}>
								delete
							</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default UsersTable;
