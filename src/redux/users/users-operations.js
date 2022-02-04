import api from '../../service/users-api';
import * as actions from './users-actions';

const getUsers = () => async (dispatch) => {
	dispatch(actions.getUsersRequest());

	try {
		const data = await api.getUsers();

		dispatch(actions.getUsersSuccess(data));
	} catch (error) {
		dispatch(actions.getUsersError(error));
	}
};

const addUser = (user) => async (dispatch) => {
	dispatch(actions.addUserRequest());

	try {
		const newUser = await api.addUser(user);

		dispatch(actions.addUserSuccess(newUser));
	} catch (error) {
		dispatch(actions.addUserError(error));
	}
};

const editUser = (id, payload) => async (dispatch) => {
	dispatch(actions.editUserRequest());

	try {
		const user = await api.editUser(id, payload);
		dispatch(actions.editUserSuccess(user));
	} catch (error) {
		dispatch(actions.editUserError(error));
	}
};

const deleteUser = (id) => async (dispatch) => {
	dispatch(actions.deleteUserRequest());

	try {
		await api.deleteUser(id);
		dispatch(actions.deleteUserSuccess(id));
	} catch (error) {
		dispatch(actions.deleteUserError(error));
	}
};

export { getUsers, addUser, editUser, deleteUser };
