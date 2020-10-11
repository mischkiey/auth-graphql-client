import { TOKEN_KEY } from '../config';

const TokenService = {
  getAuthToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  },

  hasAuthToken() {
    return window.localStorage.getItem(TOKEN_KEY) ? true : false;
  },

  saveAuthToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },

  clearAuthToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  },
}

export default TokenService;