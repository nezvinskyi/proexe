import { AppBar } from '@mui/material';

function Header() {
	return (
		<AppBar position="sticky">
			<h2 style={{ textAlign: 'center' }}>
				Test task for Proexe by Dmitry Nezvinskyi{' '}
				<a href="https://github.com/nezvinskyi/proexe">(Github)</a>
			</h2>
		</AppBar>
	);
}

export default Header;
