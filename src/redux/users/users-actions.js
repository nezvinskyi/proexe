import { createAction } from '@reduxjs/toolkit';

export const getUsersRequest = createAction('users/getUsersRequest');
export const getUsersSuccess = createAction('users/getUsersSuccess');
export const getUsersError = createAction('users/getUsersError');
