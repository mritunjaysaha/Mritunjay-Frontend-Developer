import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuthenticated: false,
        _id: '',
    },
    reducers: {
        setAuth: (state, { payload }) => {
            state.isAuthenticated = !!payload._id;
            state._id = payload._id;
        },
    },
});

export const { setAuth } = userSlice.actions;
