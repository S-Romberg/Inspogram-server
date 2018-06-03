// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres:///insta-quotes'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }


};
