
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , videos = require('./routes/videos')
  , control = require('./routes/control')
  , primary = require('./routes/primary')
  , http = require('http')
  , path = require('path')
  , app = express()
  , server = http.createServer(app)
  , io = require('socket.io').listen(server)

app.configure(function(){
  app.set('port', process.env.PORT || 3003);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/videos/:id', videos.list);
app.get('/control', control.list);
app.get('/main', primary.list);

server.listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});

//some io commands - maybe we can move this to a class
io.configure(function () {
  io.set("transports", ["xhr-polling"]);
  io.set("polling duration", 10);
});

io.sockets.on('connection', function(socket){
    socket.on('play', function(){
        io.sockets.emit('play');
    });

    socket.on('move', function(data){
        io.sockets.emit('move', data);
    });

    socket.on('pause', function(){
        io.sockets.emit('pause');
    });

    socket.on('reset', function(){
        io.sockets.emit('reset');
    });
});
