import React, {useState} from 'react';
import {BrowserRouter, createBrowserRouter, Link, Outlet, Route, RouterProvider, Routes} from 'react-router-dom';
import {AdminHomePage, DashboardExamplePage, HomePage} from './components/pages/pages.js';
import styled from 'styled-components';
import {ProtectedRoute} from "./components/reusable/components.js";

const Layout = () => {
    return (
        <LayoutStyled>
            <Outlet/>
        </LayoutStyled>
    );
};

const LayoutStyled = styled.div`
  width: 1000px;
  margin-inline: auto;
`;

const Navigation = () => (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/admin/home">Admin</Link>
    </nav>
);

const App = () => {
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        setUser({
            id: '1',
            name: 'robin',
            role: ['ADMIN']
        });
    };
    const handleLogout = () => {
        setUser(null);
    };

    return (
        <BrowserRouter>
            <>
                <Navigation/>
                {user ? (
                    <button onClick={handleLogout}>Sign Out</button>
                ) : (
                    <button onClick={handleLogin}>Sign In</button>
                )}
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<HomePage/>}/>
                        <Route element={<ProtectedRoute isAllowed={user}/>}>
                            <Route path="dashboard" element={<DashboardExamplePage/>}/>
                        </Route>

                        <Route element={<ProtectedRoute isAllowed={!!user && user.role.includes('ADMIN')}/>}>
                            <Route path="admin/home" element={<AdminHomePage/>}/>
                        </Route>
                        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
                        {/*<ProtectedRoute path="dashboard" component={<DashboardExamplePage/>} isLogged={isLogged}/>*/}
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App;
