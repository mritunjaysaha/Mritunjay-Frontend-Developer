import { createSlice } from "@reduxjs/toolkit"

export const capsuleSlice = createSlice({
    name: "capsule",
    initialState: {
        status: [],
        originalLaunch: [],
        type: []
    },
    reducers: {
        setStatusData: (state, { payload }) => {
            state.status = payload
        }
        ,
        setOriginalLaunchData: (state, { payload }) => {
            state.originalLaunch = payload
        },
        setTypeData: (state, { payload }) => {
            state.type = payload
        }
    }
})


export const { setStatusData, setOriginalLaunchData, setTypeData } = capsuleSlice.actions