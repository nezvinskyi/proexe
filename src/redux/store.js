/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/users-reducer';
import global from './global/global-reducer';

export const store = configureStore({
	reducer: {
		users: usersReducer,
		global,
	},
});
