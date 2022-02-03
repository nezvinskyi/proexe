import { combineReducers, createReducer } from '@reduxjs/toolkit';

import * as globalActions from './global-actions';
import * as usersActions from '../users/users-actions';

const isModalOpen = createReducer(false, {
	[globalActions.openModal]: () => true,
	[globalActions.closeModal]: () => false,
});

const isLoading = createReducer(false, {
	[usersActions.getUsersRequest]: () => true,
	[usersActions.getUsersSuccess]: () => false,
	[usersActions.getUsersError]: () => false,
});

export default combineReducers({
	isModalOpen,
	isLoading,
});
