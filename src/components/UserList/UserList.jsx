import { Button, Grid, Paper } from '@mui/material';
import { UsersTable } from '..';
import data from '../../data.json';

function UserList() {
	// console.log('data', data);
	return (
		<Paper>
			<Grid container>
				<Grid container mx={2} justifyContent="space-between" alignItems="center">
					<h2>User List</h2>
					<Button variant="outlined">Add New</Button>
				</Grid>
				<Grid container mx={2}>
					<UsersTable data={data} />
				</Grid>
			</Grid>
		</Paper>
	);
}

export default UserList;
