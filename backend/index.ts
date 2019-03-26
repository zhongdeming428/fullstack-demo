import app from './src/server';

// import env
require('dotenv').config();

app.server.listen(process.env.SERVER_PORT);
