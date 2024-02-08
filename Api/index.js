const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user.route.js');
const authRoute = require('./routes/auth.route.js');


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {console.log('connected to MONGO');})
  .catch((err) => {console.log(err);})

const app = express();
app.use(express.json());

app.use('/api/v1', userRoute);
app.use('/api/v1/auth', authRoute);



const port = 3000
app.listen(port, () => {
  console.log('Server listening on port...' + port);
});


// app.get('/', (req, res) => {
//   res.send('hello world')
// })