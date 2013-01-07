/**
 * Created with JetBrains PhpStorm.
 * User: Developer
 * Date: 07.01.13
 * Time: 17:37
 * Basic server for broadcasts using node.js + socket.io
 */
var io = require('socket.io').listen(8088);

io.sockets.on('connection', function (socket) {
    var roomId='broadcast1';

    socket.join(roomId);
    socket.emit('connected',null);

    socket.on('chat_msg', function (data) {

        //@todo strip_tags needed
        io.sockets.in(roomId).emit('chat_msg',{
            sender_name:    socket.id,
            text:           data.text
        });
    });
});