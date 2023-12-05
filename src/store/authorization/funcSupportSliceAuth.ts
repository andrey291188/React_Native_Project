import { FulfilledUserAction, StateAuth } from "../../types/authTypes";
import { RejectedAction } from "../../types/phonebookTypes";

export const handlePending = (state: StateAuth) => {
    state.isLoadingAuth = true;
    state.isRefreshing = true;
  };
  
  export const handleFulfilled = (state: StateAuth) => {
    state.isRefreshing = false;
    state.isLoadingAuth = false;
    state.error = '';
  };
  
  export const handleFulfilledReg = (state: StateAuth, action: FulfilledUserAction) => {
    state.user = action.payload.user;
    state.access_token = action.payload.token;
    state.isLoggedIn = true;
  };

  export const handleFulfilledLogIn = (state: StateAuth, action: FulfilledUserAction) => {
    state.user = action.payload.user;
    state.access_token = action.payload.token;
    state.isLoggedIn = true;
  };

  export const handleFulfilledLogOut = (state: StateAuth) => {
    state.user = "";
    state.access_token = ""
    state.isLoggedIn = false;
  };

  export const handleFulfilledcurrentLogin = (state: StateAuth) => {
    state.isRefreshing = true;
  };
  
  export const handleRejected = (state: StateAuth, action: RejectedAction) => {
    state.isRefreshing = false;
    state.isLoadingAuth = false;
    state.error = action.payload;
  };