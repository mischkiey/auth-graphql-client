import config from '../config';
import TokenService from '../services/token-service';

// This could be simplified to one dynamic fetch call
const UserService = {
  async login(query, variables) {
    const settings = {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify({
        query,
        variables
      })
    }

    const response = await fetch(`${config.API_ENDPOINT}`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  async signup(query, variables) {
    const settings = {
      'method': 'POST',
      'headers': {
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify({
        query,
        variables
      })
    }

    const response = await fetch(`${config.API_ENDPOINT}`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  },

  async user(query, variables = {}) {
    const settings = {
      'method': 'POST',
      'headers': {
        'Authorization': `Bearer ${TokenService.getAuthToken()}`,
        'Content-Type' : 'application/json'
      },
      'body': JSON.stringify({
        query,
        variables
      })
    }

    const response = await fetch(`${config.API_ENDPOINT}`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  }
}

export default UserService;