import config from "../config";

//HANDLE JWT TOKENS

const TokenService = {
  saveAuthTokenAndUserName(token, user_name) {
    window.localStorage.setItem("user_name", user_name);
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
    window.localStorage.removeItem("user_name");
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  getUserName() {
    return window.localStorage.getItem("user_name");
  }
};

export default TokenService;
