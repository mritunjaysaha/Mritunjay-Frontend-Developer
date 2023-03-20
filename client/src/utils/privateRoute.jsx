import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import ROUTES from '../constants/routes.json';

export function PrivateRoute({ children }) {
    const { isAuthenticated } = useSelector((state) => state.user);

    return isAuthenticated ? children : <Navigate to={ROUTES.SIGN_IN} />;
}
