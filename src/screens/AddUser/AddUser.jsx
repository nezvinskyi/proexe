import { Grid, Paper } from '@mui/material';
import { DashboardLayout, Form } from '../../components';

function AddUser() {
	return (
		<DashboardLayout>
			<Paper>
				<Grid container>
					<Grid container mx={2} justifyContent="space-between" alignItems="center">
						<h2>Add new user</h2>
						{/* <Button onClick={handleAddClick} variant="outlined">
							Add New
						</Button> */}
					</Grid>
					<Grid container mx={2}>
						<Form />
					</Grid>
				</Grid>
			</Paper>
		</DashboardLayout>
	);
}

export default AddUser;
