import { createReducer } from '@reduxjs/toolkit';

import * as actions from './users-actions';

const users = createReducer([], {
	[actions.getUsersSuccess]: (_, { payload }) => payload,

	[actions.addUserSuccess]: (state, { payload }) => [...state, payload],

	[actions.editUserSuccess]: (state, { payload }) =>
		state.map((item) => {
			return item.id === payload.id ? payload : item;
		}),

	[actions.deleteUserSuccess]: (state, { payload }) => state.filter((item) => item.id !== payload),
});

export default users;
