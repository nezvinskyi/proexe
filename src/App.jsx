import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Dashboard, AddUser, EditUser } from './screens';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/add-user" element={<AddUser />} />
			<Route path="/edit-user/:id" element={<EditUser />} />
		</Routes>
	);
}

export default App;
