import { FulfilledCreateAction, FulfilledDeleteAction, FulfilledGetAction, RejectedAction, StatePhonebook } from "../../types/phonebookTypes";


export const handlePending = (state: StatePhonebook) => {
  state.isLoading = true;
};

export const handleFulfilled = (state: StatePhonebook) => {
  state.isLoading = false;
  state.error = "";
};

export const handleFulfilledGet = (
  state: StatePhonebook,
  action: FulfilledGetAction
) => {
  state.contactList = action.payload;
};

export const handleFulfilledCreate = (
  state: StatePhonebook,
  action: FulfilledCreateAction
) => {
  state.contactList.push(action.payload);
};

export const handleFulfilledDelete = (
  state: StatePhonebook,
  action: FulfilledDeleteAction
) => {
  return {
    ...state,
    contactList: state.contactList.filter(
      (contact) => contact.id !== action.payload
    ),
  };
};

export const handleRejected = (
  state: StatePhonebook,
  action: RejectedAction
) => {
  state.isLoading = false;
  state.error = action.payload;
};
