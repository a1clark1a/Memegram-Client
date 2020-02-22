import config from "../config";

//HANDLE JWT TOKENS

const TokenService = {
  saveAuthTokenAndUserName(token, user_name) {
    window.sessionStorage.setItem("user_name", user_name);
    window.sessionStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.sessionStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    window.sessionStorage.removeItem(config.TOKEN_KEY);
    window.sessionStorage.removeItem("user_name");
  },
  hasAuthToken() {
    console.log("checking for auth token");
    return !!TokenService.getAuthToken();
  },
  getUserName() {
    return window.sessionStorage.getItem("user_name");
  }
};

export default TokenService;
