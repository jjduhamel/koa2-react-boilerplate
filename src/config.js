module.exports = {
  test: {
    host: '0.0.0.0',
    port: 3001,
  },
  production: {
    host: 'https://ALIAS.ngrok.io',
    port: 8000,
  },
  development: {
    host: '0.0.0.0',
    port: 3000,
  }
};
