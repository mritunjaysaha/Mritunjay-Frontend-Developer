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
            state.originalLaunch = []
            state.type = []
        }
        ,
        setOriginalLaunchData: (state, { payload }) => {
            state.originalLaunch = payload
            state.status = []
            state.type = []
        },
        setTypeData: (state, { payload }) => {
            state.type = payload
            state.originalLaunch = []
            state.type = []
        }
    }
})


export const { setStatusData, setOriginalLaunchData, setTypeData } = capsuleSlice.actions