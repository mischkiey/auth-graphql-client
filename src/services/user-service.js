import config from '../config';

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

    // http://localhost:8000/graphql
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

    // http://localhost:8000/graphql
    const response = await fetch(`${config.API_ENDPOINT}`, settings);

    if(!response.ok) {
      const error = await response.json();
      return Promise.reject(error);
    }

    return response.json();
  }
}

export default UserService;