import { createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { clearAuthHeader, currentUser, logIn, logOut, setAuthHeader, signUp } from "../../service/createResponse";
import { MyErrorType } from "../../types/errorTypes";
import { LogIn, SignUp } from "../../types/responseTypes";


export const registerThunk = createAsyncThunk(
    "auth/register",
    async (body: SignUp, {rejectWithValue}) => {
        try {
            const data = await signUp(body)
            Alert.alert("Congratulations!", "Registration seccessful!")
            return data
        } catch (error) {
            const {message} = error as MyErrorType;
            Alert.alert("Error", message)
            return rejectWithValue(message)
        }
    }
)

export const logInThunk = createAsyncThunk(
    "auth/login",
    async (body: LogIn, {rejectWithValue}) => {
        try {
            const data = await logIn(body)
            Alert.alert("Congratulations!", "You have seccessfully logged in!")
            return data
        } catch (error) {
            const {message} = error as MyErrorType;
            Alert.alert("Error", message)
            return rejectWithValue(message)
        }
    }
)

export const logOutThunk = createAsyncThunk(
    "auth/logout",
    async (body, {rejectWithValue}) => {
        try {
            await logOut()
            Alert.alert("Congratulations!", "You seccessfully logged out!")
            clearAuthHeader()
        } catch (error) {
            const {message} = error as MyErrorType;
            Alert.alert("Error", message)
            return rejectWithValue(message)
        }
    }
)

export const currentUserThunk = createAsyncThunk(
    "auth/currentuser",
    async (body, {rejectWithValue, getState}: any ) => {
        const { access_token } = getState().auth
        if (access_token === "") {
            return
        }
        setAuthHeader(access_token)
        try {
            const data = await currentUser()
            Alert.alert("Congratulations!", "You have seccessfully logged in!")
            return data
        } catch (error) {
            const {message} = error as MyErrorType;
            Alert.alert("Error", message)
            return rejectWithValue(message)
        }
    }
)