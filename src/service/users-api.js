import axios from 'axios';
import './api-settings';

const getUsers = async () => {
	const { data } = await axios.get('/data');
	return data;
};

const addUser = async (user) => {
	const { data } = await axios.post('/data', user);
	return data;
};

const editUser = async (id, payload) => {
	const { data } = await axios.patch(`/data/${id}`, payload);
	return data;
};

const deleteUser = async (id) => {
	await axios.delete(`/data/${id}`);
};

export default { getUsers, addUser, editUser, deleteUser };
