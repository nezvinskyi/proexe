/* eslint-disable import/prefer-default-export */
const getAllUsers = (state) => {
	return state.users;
};
// TODO remove getUserById
const getUserById = (id) => {
	getAllUsers.filter((user) => user.id === id);
};

export { getAllUsers, getUserById };
