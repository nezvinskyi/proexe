/* eslint-disable react/prop-types */
import { Box, Button, Modal } from '@mui/material';
import { useDispatch } from 'react-redux';
import { usersOperations } from '../../redux/users';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	borderRadius: '4px',
	boxShadow: 24,
	p: 4,
};

function ModalWindow({ ...props }) {
	const dispatch = useDispatch();
	const {
		user: { id, username },
		modalIsOpen,
		handleClose,
	} = props;

	const handleConfirmDelete = () => {
		dispatch(usersOperations.deleteUser(id));
		handleClose();
	};

	return (
		<Modal open={modalIsOpen} onClose={handleClose}>
			<Box sx={style}>
				<h2>Warning!</h2>
				<p className="">
					Are you sure you want to delete user: <strong>{username}</strong>
				</p>
				<Box display="flex" justifyContent="space-between">
					<Button onClick={handleClose} variant="outlined">
						Cancel
					</Button>
					<Button onClick={handleConfirmDelete} color="error" variant="contained">
						Delete
					</Button>
				</Box>
			</Box>
		</Modal>
	);
}

export default ModalWindow;
