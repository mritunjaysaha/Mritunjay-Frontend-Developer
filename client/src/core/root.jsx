import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider, useDispatch } from 'react-redux';

import { AppRoutes } from './routes';
import { setAuthToken } from '../utils/setAuthToken';
import { store } from '../redux/store';
import { setAuth } from '../redux/userSlice';

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

export function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppRoutes />
            </BrowserRouter>
        </Provider>
    );
}
