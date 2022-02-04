import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as globalActions from './global-actions';
import * as usersActions from '../users/users-actions';

const isModalOpen = createReducer(false, {
	[globalActions.openModal]: () => true,
	[globalActions.closeModal]: () => false,
});

const isLoading = createReducer(false, {
	[usersActions.getUsersRequest]: () => true,
	[usersActions.addUserRequest]: () => true,
	[usersActions.editUserRequest]: () => true,
	[usersActions.deleteUserRequest]: () => true,

	[usersActions.getUsersSuccess]: () => false,
	[usersActions.addUserSuccess]: () => false,
	[usersActions.editUserSuccess]: () => false,
	[usersActions.deleteUserSuccess]: () => false,

	[usersActions.getUsersError]: () => false,
	[usersActions.addUserError]: () => false,
	[usersActions.editUserError]: () => false,
	[usersActions.deleteUserError]: () => false,
});

export default combineReducers({
	isModalOpen,
	isLoading,
});
// TODO errors handling
