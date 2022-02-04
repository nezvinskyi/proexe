import { createAction } from '@reduxjs/toolkit';

export const getUsersRequest = createAction('users/getUsersRequest');
export const getUsersSuccess = createAction('users/getUsersSuccess');
export const getUsersError = createAction('users/getUsersError');

export const addUserRequest = createAction('users/addUserRequest');
export const addUserSuccess = createAction('users/addUserSuccess');
export const addUserError = createAction('users/addUserError');

export const editUserRequest = createAction('users/editUserRequest');
export const editUserSuccess = createAction('users/editUserSuccess');
export const editUserError = createAction('users/editUserError');

export const deleteUserRequest = createAction('users/deleteUserRequest');
export const deleteUserSuccess = createAction('users/deleteUserSuccess');
export const deleteUserError = createAction('users/deleteUserError');
