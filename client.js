/**
 * Created with JetBrains PhpStorm.
 * User: Adiar
 * Date: 07.01.13
 * Time: 17:42
 * Client script
 */


$(document).ready(function (){
    var socket = io.connect('http://localhost:8088');

    socket.on('connected', function (data) {
        console.log('Connected to socket.io');
    });

    socket.on('chat_msg', function (data) {
        $('<div class="chat_msg_wrapper"><b>'+data.sender_name+': </b>'+data.text+'</div>').prependTo("#chatMsgHolder").effect("highlight", {}, 2000);
    });

    //Binding UI controls

    $("#chatMsgSendBtn").click(function (e){
        e.preventDefault();
        socket.emit('chat_msg',{text: $("#chatMsgText").val()});
        $("#chatMsgText").val('');
        return false;
    });

    //strobe routine
    var options={
        id: "smpVideo",
        src: "rtmp://ec2-54-243-23-255.compute-1.amazonaws.com/live/broadcast",
        width: 480,
        height: 362,
        poster: "images/poster.png",
        favorFlashOverHtml5Video: true,
        streamType: 'live'
    };

    // Using StrobeMediaPlayback
    var $video = $(".video_holder").strobemediaplayback(options);

});
