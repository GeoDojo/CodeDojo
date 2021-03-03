const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// server integrated with websocket
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const PORT = 3000;

// require the routes
const gameRouter = require('./routes/gameRouter');
const userRouter = require('./routes/userRouter');

app.use(express.json());
//app.use(cookieParser());


// route handlers
// app.get('/game/start', (req, res) => {
//   console.log('hi im here');
//   return res.status(200).send({
//     message: 'hi'
//   })
// })

app.use('/game', gameRouter);
app.use('/user', userRouter);

// handles static files for dev server
app.use('/dist', express.static(path.resolve(__dirname, '../dist')));
app.use('/assets', express.static(path.resolve(__dirname, '../client/assets')));

// to serve react router the static files
app.get('/*', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// catch all
app.use('*', (req, res, next) => {
  return res.status(404).send('Sorry, wrong page! Try again! 🤪');
});

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'Interal Server Error' },
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).send(errorObj.message);
});


server.listen(PORT, () => {
  //app.listen(PORT, () => {
  console.log(`Server is listening to 🚀 ${PORT}... 🚀`);
});


io.on('connection', (socket) => {
  //this is when a user lands on our site
  console.log('a user connected: ', socket.id)

  socket.on('test', (arg) => {
    console.log(arg)
  })

  //Each socket also fires a special disconnect event:
  socket.on('disconnect', () => {
    console.log('a user disconnect');
  })
})

//module.exports = app;
module.exports = server;