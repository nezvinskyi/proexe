import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Paper } from '@mui/material';
import { usersOperations, usersSelectors } from '../../redux/users';
import { UsersTable, Modal } from '..';

function UserList() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [modalIsOpen, setModalOpen] = useState(false);
	const [user, setUser] = useState('');

	useEffect(() => {
		dispatch(usersOperations.getUsers());
	}, []);

	const handleAddClick = () => {
		navigate('/add-user');
	};

	const users = useSelector(usersSelectors.getAllUsers);

	const handleEditClick = (id) => {
		navigate(`/edit-user/${id}`);
	};

	const handleDeleteClick = (id, username) => {
		setModalOpen(true);

		setUser({ id, username });
	};

	const handleClose = () => {
		setModalOpen(false);
	};

	return (
		<Paper>
			<Grid container>
				<Grid container mx={2} justifyContent="space-between" alignItems="center">
					<h2>User List</h2>
					<Button onClick={handleAddClick} variant="contained" color="primary">
						Add New
					</Button>
				</Grid>
				<Grid container mx={2}>
					<UsersTable
						users={users}
						handleDeleteClick={handleDeleteClick}
						handleEditClick={handleEditClick}
					/>
				</Grid>
			</Grid>
			<Modal modalIsOpen={modalIsOpen} handleClose={handleClose} user={user} />
		</Paper>
	);
}

export default UserList;
