import {createBrowserRouter, Outlet, RouterProvider} from "react-router-dom";

const Layout = () => {
    return (
        <div className="app">
            <Outlet />
        </div>
    )
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <div>HOME</div>
            },
        ]
    },
])

const App = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;