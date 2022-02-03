import { Routes, Route } from 'react-router-dom';

import './App.css';
import { Dashboard, AddUser } from './screens';

function App() {
	return (
		<Routes>
			<Route path="/" element={<Dashboard />} />
			<Route path="/add-user" element={<AddUser />} />
		</Routes>
	);
}

export default App;
