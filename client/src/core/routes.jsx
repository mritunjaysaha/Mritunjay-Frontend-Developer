import { lazy, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { setAuthToken } from '../utils/setAuthToken';
import { setAuth } from '../redux/userSlice';
import ROUTES from '../constants/routes.json';
import { PrivateRoute } from '../utils/privateRoute';

const Home = lazy(() => import('../pages/Home/Home'));
const SignUp = lazy(() => import('../pages/SignUp/SignUp'));
const SignIn = lazy(() => import('../pages/SignIn/SignIn'));

export function AppRoutes() {
    const dispatch = useDispatch();

    useEffect(() => {
        if (window.localStorage.jwtToken) {
            const token = localStorage.jwtToken;
            console.log({ token });
            setAuthToken(token);

            const decoded = jwtDecode(token);

            console.log({ decoded });

            dispatch(setAuth(decoded));
        }
    }, []);

    return (
        <Routes>
            <Route
                path={ROUTES.HOME}
                element={
                    <PrivateRoute>
                        <Home />
                    </PrivateRoute>
                }
            />
            <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
            <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
        </Routes>
    );
}
