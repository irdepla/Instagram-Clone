import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("user") || "{}") || null,
        token: localStorage.getItem("token") || null,
    },
    reducers: {
        setUser(state, action: any){
            console.log("xotiraga saqlandi", action);
            localStorage.setItem("token", action.payload.accessToken || "")
            localStorage.setItem("user", JSON.stringify(action.payload.user) || "{}")
            state.token = action.accessToken
            state.user = action.user
        }
    }
})


export const {setUser} = authSlice.actions