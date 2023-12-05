export interface StateAuth {
  user: string;
  access_token: string;
  isLoadingAuth: boolean;
  error: string;
  isLoggedIn: boolean;
  isRefreshing: boolean;
}

export interface User {
    user: string;
    token: string;
  }
  
  export interface FulfilledUserAction {
    type: string;
    payload: User;
  }

