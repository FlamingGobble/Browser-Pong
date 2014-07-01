var ballDir = (Math.floor(Math.random() * (360) + 1)) * (Math.PI / 180);
var player = $('#player');
var cpu = $("#cpu");
var ball = $("#ball");
var starting = true;
var dist = 2;
var playerSpeed = 10;
var cpuSpeed = 2;
$(document).keydown(function (e) {
    if (e.keyCode === 68 && player.position().left < 215) {
        player.css("left", player.position().left + playerSpeed + 'px');
    } else if (e.keyCode === 65 && player.position().left > -215) {
        player.css("left", player.position().left - playerSpeed + 'px');
    }
});
$(document).mouseenter(function () {
    $("#ball").click(function () {
        if (starting) {
            setInterval(function () {
                //Function for the ball's bounce
                function ballBounce(condition) {
                    if (condition) {
                        ball.css("left", (ball.position().left + Math.sin(ballDir) * (0 - dist)) + "px");

                        if (ball.position().left < 0 || ball.position().left > 500) {
                            ballDir = (180 - ((180 / Math.PI) * ballDir)) * (Math.PI / 180);
                        } else {
                            ballDir = (0 - ((180 / Math.PI) * ballDir)) * (Math.PI / 180);
                        }
                        ball.css("left", (ball.position().left + Math.sin(ballDir) * dist) + "px");
                    }
                }
                //Ball actual motion
                ball.css("top", ball.position().top + (dist * Math.sin(ballDir)) + 'px');
                ball.css("left", ball.position().left + (dist * Math.cos(ballDir)) + 'px');
                ballBounce(ball.position().left < 0 || ball.position().left > 500);
                //AI MOTION
                function aiMove() {
                    if (ball.position().left > cpu.position().left + 30) {
                        cpu.css("left", (cpu.position().left + cpuSpeed) + "px");
                    } else if (ball.position().left < cpu.position().left + 30) {
                        cpu.css("left", (cpu.position().left - cpuSpeed) + "px");
                    }
                }
                aiMove();
            }, 5);
        }
        starting = false;
    });
});
