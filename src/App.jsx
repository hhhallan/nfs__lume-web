import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";
import {DashboardExamplePage, HomePage} from "./components/pages/pages.js";
import styled from "styled-components";

const Layout = () => {
    return (
        <LayoutStyled>
            <Outlet/>
        </LayoutStyled>
    )
}

const LayoutStyled = styled.div`
  width: 1000px;
  margin-inline: auto;
`;

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/dashboard",
                element: <DashboardExamplePage/>
            },
        ]
    },
])

const App = () => {
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
};

export default App;