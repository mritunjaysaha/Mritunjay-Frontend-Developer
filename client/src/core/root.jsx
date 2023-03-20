import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import { Provider } from 'react-redux';

import { AppRoutes } from './routes';
import { store } from '../redux/store';

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
