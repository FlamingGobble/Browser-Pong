var ballDir = Math.floor(Math.random() * (360) + 1);
var player = $('#player');
var cpu = $("#cpu");
var ball = $("#ball");
var starting = true;
var dist = 2;
var playerSpeed = 10;
var cpuSpeed = 1;
var prevDir = 0;
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
					//left and right bounce
					prevDir = ballDir;
					if (ball.position().left < 2) {
						if(ballDir < 180) {
							ballDir = 180 - ballDir;
						}
						else {
							ballDir = 360 + (BallDir - 180);
						}
					} else if (ball.position().left > 499) {
						if (ballDir > 0) {
							ballDir = 180 - ballDir;
						}
						else {
							ballDir = 180 + ballDir;
						}
					}
					//top and bottom bounce
					if (ball.position().top < 1) {
						if(ballDir < 90) {
							ballDir = 360 - ballDir;
						}
						else {
							ballDir = 180 + (ballDir - 90);
						}
					}
					else if (ball.position().top > 379) {
						if(ballDir > 270) {
							ballDir =  90 - (ballDir - 270);
						}
						else {
							ballDir = 90 + (270 - ballDir);
						}
					}
					if(ballDir !== prevDir) {
						multiplier = 2;
					}
					else if (multiplier !== 1) {
						multiplier = 1;
					}
				}
				function ballMove(condition) {
					ball.css("top", ball.position().top + (dist * Math.sin(ballDir)) + 'px');
					ball.css("left", ball.position().left + (dist * Math.cos(ballDir)) + 'px');
				}			
                //Ball actual motion
				ballMove();
                ballBounce();
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
