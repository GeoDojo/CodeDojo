
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// server integrated with websocket
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);


const PORT = 3000;

// // require the routes
const algoHelper = require('./algoHelper');
const { testUserFxn } = require('./controllers/algoController');
const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(cookieParser());

// app.use('/game', gameRouter);
// app.use('/user', userRouter);

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
  //console.log('a user connected: ', socket.id)

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log(`user ${socket.id} joined room: `, room)
    io.sockets.emit("addUser", [socket.id, 'heidi']) //key value pair
  })

  socket.on('getAlgo', async (payload) => {
    const finalResObj = await algoHelper(payload);

    io.sockets.emit('sendAlgo', finalResObj);
  });

  socket.on('submitAlgo', async (payload) => {

    const finalResObj = testUserFxn(payload, socket.id);
    io.sockets.emit('results', finalResObj);
  })

  //Each socket also fires a special disconnect event:
  socket.on('disconnect', () => {
    console.log('a user disconnect', socket.id);
  })
})

module.exports = server;
