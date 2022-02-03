import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Paper } from '@mui/material';
import { usersOperations, usersSelectors } from '../../redux/users';
import { UsersTable } from '..';
// import data from '../../data.json';

function UserList() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(usersOperations.getUsers());
	}, []);

	const users = useSelector(usersSelectors.getAllUsers);

	return (
		<Paper>
			<Grid container>
				<Grid container mx={2} justifyContent="space-between" alignItems="center">
					<h2>User List</h2>
					<Button variant="outlined">Add New</Button>
				</Grid>
				<Grid container mx={2}>
					<UsersTable users={users} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default UserList;
