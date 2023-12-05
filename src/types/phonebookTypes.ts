export interface Contact {
    id: string;
    name: string;
    number: string;
  }
  
  export interface StatePhonebook {
    contactList: Contact[];
    isLoading: boolean;
    error: string;
  }
  
  export interface FulfilledGetAction {
    type: string;
    payload: Contact[];
  }
  
  export interface FulfilledCreateAction {
    type: string;
    payload: Contact;
  }
  
  export interface FulfilledDeleteAction {
    type: string;
    payload: string;
  }
  
  export interface RejectedAction {
    type: string;
    payload: string;
  }