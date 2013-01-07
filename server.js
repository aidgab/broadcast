/**
 * Created with JetBrains PhpStorm.
 * User: Developer
 * Date: 07.01.13
 * Time: 17:37
 * To change this template use File | Settings | File Templates.
 */
var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)

app.listen(8088);

io.sockets.on('connection', function (socket) {
    var roomId='broadcast1'
    socket.join(roomId);

    socket.on('my other event', function (data) {
        console.log(data);
    });
});