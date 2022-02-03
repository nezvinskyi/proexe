/* eslint-disable import/prefer-default-export */
import api from '../../service/users-api';
import * as actions from './users-actions';

const getUsers = () => async (dispatch) => {
	dispatch(actions.getUsersRequest);

	try {
		const data = await api.getUsers();

		dispatch(actions.getUsersSuccess(data));
	} catch (error) {
		dispatch(actions.getUsersError);
	}
};

export { getUsers };
