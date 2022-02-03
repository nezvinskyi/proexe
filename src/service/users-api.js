import axios from 'axios';
import './api-settings';

const getUsers = async () => {
	const { data } = await axios.get('/data');
	return data;
};

export default { getUsers };
