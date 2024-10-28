const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'});


const app = require('../app.cjs');

const DB = process.env.DATABASE.replace('<db_password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true
}).then(connection => {
  // console.log(connection.connections);
  console.log('DB connection successful!');
});


const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`server is up & running on port: ${port}`);
});
