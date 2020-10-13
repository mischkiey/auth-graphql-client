// Deployment automation script
export default {
  API_ENDPOINT: (process.env.REACT_APP_ENV === 'production')
    ? 'http://localhost:8000/graphql'
    : 'http://localhost:8000/graphql',
    
  TOKEN_KEY: process.env.REACT_APP_TOKEN_KEY || 'secret'
}

