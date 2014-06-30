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
$(document).mouseenter(function () {
    if (starting) {
        $("#ball").click(function () {
            starting = false;
            setInterval(function () {
                ball.css("top", ball.position().top + (dist * Math.sin(ballDir)) + 'px');
                ball.css("left", ball.position().left + (dist * Math.cos(ballDir)) + 'px');
                if (ball.position().left < 0 || ball.position().left > 500) {
                    ball.css("left", ball.position().left + Math.sin(ballDir)*(0-dist));
                    if (ball.position().left < 0 || ball.position().left > 500) {
                        ballDir = (180-((180/Math.PI)*ballDir))*(Math.PI/180);
                    } else {
                        ballDir = (0-((180/Math.PI)*ballDir))*(Math.PI/180);
                    }
                    ball.css("left", ball.position().left + Math.sin(ballDir)*dist);
                }
            }, 5);
        });
    }
});
