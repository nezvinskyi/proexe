/* eslint-disable react/prop-types */
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';

function UsersTable({ data }) {
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
				{data.map(({ id, name, username, email, address: { city } }) => (
					<TableRow key={id}>
						<TableCell align="center">{id}</TableCell>
						<TableCell align="center">{name}</TableCell>
						<TableCell align="center">{username}</TableCell>
						<TableCell align="center">{email}</TableCell>
						<TableCell align="center">{city}</TableCell>
						<TableCell align="center">
							<Button>edit</Button>
						</TableCell>
						<TableCell align="center">
							<Button>delete</Button>
						</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}

export default UsersTable;
