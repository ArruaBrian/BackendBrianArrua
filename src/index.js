const express = require('express');
const manager = require('./products.manager');
const cart = require('./cart.manager');
const router = require('./router');
const handlebars = require('express-handlebars');
const { Server } = require('socket.io');

const app = express();
const httpServer = app.listen(3000, () =>
  console.log('escuchando en el puerto 3000')
);

app.engine('handlebars', handlebars.engine());
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }));

const socketServer = new Server(httpServer);

socketServer.on('connect', (socket) => {
  console.log('nuevo cliente');
});

global.io = socketServer;

router(app);
