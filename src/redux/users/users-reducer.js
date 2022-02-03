import { createReducer } from '@reduxjs/toolkit';

import * as actions from './users-actions';

const users = createReducer([], {
	[actions.getUsersSuccess]: (_, { payload }) => payload,
});

export default users;
