import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import { capsuleSlice } from "./capsuleSlice"

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        capsule: capsuleSlice
    }
})