import {Outlet} from "react-router-dom";

const ProtectedRoute = ({isAllowed, redirectPath = '/landing', children,}) => {
    if (!isAllowed) {
        // return <Navigate to={redirectPath} replace/>;
        return <h2>Vous n'êtes pas autorisé !</h2>
    }

    return children ? children : <Outlet/>;
};

export default ProtectedRoute;