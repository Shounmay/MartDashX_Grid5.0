import { useMemo } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { themeSettings } from 'theme';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from 'scenes/layout';
import Dashboard from 'scenes/dashboard';
import Products from 'scenes/products';
import Customers from 'scenes/customers';
import Transactions from 'scenes/transactions';
import Geography from 'scenes/geography';
import Overview from 'scenes/overview';
import Daily from 'scenes/daily';
import Monthly from 'scenes/monthly';
import Breakdown from 'scenes/breakdown';
import Admin from 'scenes/admins';
import Performance from 'scenes/performance';
import Recommendations from 'scenes/recommendation';

function App() {
	const mode = useSelector((state) => state.global.mode);
	const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
	return (
		<div className='App'>
			<BrowserRouter>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Routes>
						<Route element={<Layout />}>
							<Route
								path='/'
								element={<Navigate to='/userrecommendations' replace />}
							/>
							<Route
								path='/userrecommendations'
								element={<Recommendations />}
							/>
							<Route path='/dashboard' element={<Dashboard />} />
							<Route path='/products' element={<Products />} />
							<Route path='/customers' element={<Customers />} />
							<Route path='/transactions' element={<Transactions />} />
							<Route path='/diversitystats' element={<Geography />} />
							<Route path='/overview' element={<Overview />} />
							<Route path='/daily' element={<Daily />} />
							<Route path='/monthly' element={<Monthly />} />
							<Route path='/breakdown' element={<Breakdown />} />
							<Route path='/admin' element={<Admin />} />
							<Route path='/performance' element={<Performance />} />
						</Route>
					</Routes>
				</ThemeProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
