import React, {useState} from 'react';
import {BrowserRouter, Link, Outlet, Route, Routes} from 'react-router-dom';
import {AdminHomePage, HomePage} from './components/pages/pages.js';
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
  width: 1250px;
  margin-inline: auto;
`;

const Navigation = () => (
    <nav>
        <Link to="/">Home</Link>
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

                        <Route element={<ProtectedRoute isAllowed={!!user && user.role.includes('ADMIN')}/>}>
                            <Route path="admin/home" element={<AdminHomePage/>}/>
                        </Route>
                        <Route path="*" element={<p>There's nothing here: 404!</p>}/>
                    </Route>
                </Routes>
            </>
        </BrowserRouter>
    );
};

export default App;
