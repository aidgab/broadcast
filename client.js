/**
 * Created with JetBrains PhpStorm.
 * User: Developer
 * Date: 07.01.13
 * Time: 17:42
 * To change this template use File | Settings | File Templates.
 */

var socket = io.connect('http://localhost:8088');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});
