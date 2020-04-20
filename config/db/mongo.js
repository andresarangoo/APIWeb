const DB_USER = 'Alumnos';
const DB_PASS = 'ingeweb20';
const DB_HOST = 'cluster0-gtjc7.mongodb.net/test?retryWrites=true&w=majority';

const MONGODB_OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };

/**
 * This URI structure is meant to be used on MongoDB Atlas.
 * You can update it if you use another provider.
 */
const MONGO_URI = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}`;

module.exports = {
  MONGO_URI,
  MONGODB_OPTIONS,
};
