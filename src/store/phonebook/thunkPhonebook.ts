import { createAsyncThunk } from "@reduxjs/toolkit";
import { deleteRequest, getRequest, postRequest } from "../../service/createResponse";
import { AddContact } from "../../types/responseTypes";
import { MyErrorType } from "../../types/errorTypes";
import { Alert } from "react-native";



export const getPhoneBookThunk = createAsyncThunk("phonebook/get", async (_, {rejectWithValue}) => {
    try {
       const data = await getRequest()
    return data 
    } catch (error) {
        const {message} = error as MyErrorType;
        Alert.alert("Error", message)
        return rejectWithValue(message)
    }
})

export const createPhoneBookThunk = createAsyncThunk("phonebook/create", async (data: AddContact, { dispatch, rejectWithValue }) => {
    try {
        await postRequest(data);
        Alert.alert("Congratulations!", "Contact added successfully")
        dispatch(getPhoneBookThunk());
        return data;
      } catch (error) {
        const {message} = error as MyErrorType;
        Alert.alert("Error", message)
        return rejectWithValue(message)
      }
      }
)

export const deletePhoneBookThunk = createAsyncThunk(
    "phonebook/delete",
    async (id: string, { dispatch, rejectWithValue }) => {
      try {
        await deleteRequest(id);
        Alert.alert("Congratulations!", "Contact deleted successfully")
        dispatch(getPhoneBookThunk());
        return id;
      } catch (error) {
        const {message} = error as MyErrorType;
        Alert.alert("Error", message)
        return rejectWithValue(message)
      }
    }
  );