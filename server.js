var
  express = require('express'),
  app = express(),
  server = require('http').createServer(app),
  io = require('socket.io')(server);
  // playerManager = createPlayerManager();

io.on('connection', function(client) {
  // playerManager.add(client);
  console.log('establishing connection...');
  console.log('client.id: ', client.id);
  client.emit('update', {data: 'random data'});

  client.on('disconnect', function() {
    console.log('disconnecting client...');
    console.log('client.id: ', client.id);
  });
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/client.html');
});

server.listen(3000, function() {
  console.log('server listening on port 3000');
});
