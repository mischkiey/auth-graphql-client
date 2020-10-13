import config from '../config';

const TokenService = {
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },

  hasAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY) ? true : false;
  },

  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },

  clearAuthToken() {
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
}

export default TokenService;