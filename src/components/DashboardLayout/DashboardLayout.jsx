/* eslint-disable react/prop-types */
import { Container } from '@mui/material';
import { Header } from '..';
import css from './DashboardLayout.module.css';

function DashboardLayout({ children }) {
	return (
		<>
			<Header />
			<Container>
				<h1 className={css.title}>Dashboard</h1>
				{children}
			</Container>
		</>
	);
}

export default DashboardLayout;
