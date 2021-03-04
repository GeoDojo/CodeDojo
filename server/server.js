
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
app.use(cookieParser());

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

  socket.on('joinRoom', (room) => {
    socket.join(room);
    console.log('user joined room: ', room)
  })

  socket.on("getAlgo", (payload) => {
    console.log('payload: ', payload)

    // eventually the real middleware

    const resBody = {
      algoName: 'Add Two',
      algoPrompt: 'take a num and add 2',
      algoStart: `function addTwo(num){
        //enter your code here...
      };`,
      test_cases: [[1, 3], [2, 4]],
      completedAlgos: {
        2: true,
      },
      totalRows: 4
    };

    io.in(payload.roomNumber).emit("sendAlgo", resBody);

    //sending message to user, wecloming to chat room
    socket.emit('newAlgo', `Welcome to ${room}`);
  });

  //Each socket also fires a special disconnect event:
  socket.on('disconnect', () => {
    console.log('a user disconnect', socket.id);
  })
})

//module.exports = app;
module.exports = server;