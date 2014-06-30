var ballDir = (Math.floor(Math.random() * (360) + 1)) * (Math.PI / 180);
var player = $('#player');
var cpu = $("#cpu");
var ball = $("#ball");
var starting = true;
var dist = 2;
$(document).keydown(function (e) {
    if (e.keyCode === 68 && player.position().left < 215) {
        player.css("left", player.position().left + 5 + 'px');
    } else if (e.keyCode === 65 && player.position().left > -215) {
        player.css("left", player.position().left - 5 + 'px');
    }
});
$(document).hover(function () {
    if (starting) {
        $("#ball").hover(function () {
            starting = false;
        });
    } else {
        setInterval(function () {
            ball.css("top", ball.position().top + (dist * Math.sin(ballDir)) + 'px');
            ball.css("left", ball.position().left + (dist * Math.cos(ballDir)) + 'px');
        }, 5);
    }
});
