var ballDir = (Math.floor(Math.random() * (360) + 1)) * (Math.PI / 180);
var player = $('#player');
var cpu = $("#cpu");
var ball = $("#ball");
var starting = true;
var dist = 2;
var playerSpeed = 10;
var scorePlayer = 0;
var ScoreOpponent = 0;
var cpuSpeed = 0;
var randOffset = 15;
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

                        if (condition) {
                            ballDir = ((Math.floor(Math.random() * ((2 * randOffset) + 1)) - randOffset) + (180 - ((180 / Math.PI) * ballDir))) * (Math.PI / 180);
                        } else {
                            ballDir = ((Math.floor(Math.random() * ((2 * randOffset) + 1)) - randOffset) + (0 - ((180 / Math.PI) * ballDir))) * (Math.PI / 180);
                        }
                        ball.css("left", (ball.position().left + Math.sin(ballDir) * dist) + "px");
                    }
                }
                //Ball actual motion
                ball.css("top", ball.position().top + (dist * Math.sin(ballDir)) + 'px');
                ball.css("left", ball.position().left + (dist * Math.cos(ballDir)) + 'px');
                //Ball bouncing!  Will be combined later.
                //Check for walls
                ballBounce(ball.position().left < 0 || ball.position().left > 500);
                //Check for the player paddle
                ballBounce(ball.position().left < player.position().left + 70 && ball.position().left + 10 > player.position().left && ball.position().top < 380 && ball.position().top > 370);
                //AI MOTION
                function aiMove() {
                    if (ball.position().left > cpu.position().left + 30) {
                        if (ball.position().left - cpu.position().left + 30 < 120) {
                            if (ball.position().top - cpu.position().top < 120) {
                                cpuSpeed = 2;
                            } else {
                                cpuSpeed = 2 - (Math.Random() / 2); //from 1.5-2
                            }
                        } else {
                            if (ball.position().top - cpu.position().top > 250) {
                                cpuSpeed = 1;
                            } else if (ball.position().top - cpu.position().top > 160) {
                                cpuSpeed = 1.5;
                            } else {
                                cpuSpeed = 2;
                            }
                        }
                    } else {
                        if (cpu.position().left - ball.position().left + 30 < 120) {
                            if (ball.position().top - cpu.position().top < 120) {
                                cpuSpeed = -2;
                            } else {
                                cpuSpeed = -2 + (Math.Random() / 2);
                            }
                        } else {
                            if (ball.position().top - cpu.position().top > 250) {
                                cpuSpeed = -1;
                            } else if (ball.position().top - cpu.position().top > 160) {
                                cpuSpeed = -1.5;
                            } else {
                                cpuSpeed = -2;
                            }
                        }
                    }
                    cpu.css("left", (cpu.position().left + cpuSpeed) + "px");
                }
                aiMove();

                function detectGoal() {
                    if (ball.position().top < 1) {
                        scorePlayer += 1;
                        reset();
                    }
                    if (ball.position().top > 379) {
                        scoreOpponent += 1;
                        reset();
                    }
                }

                function reset() {
                    ball.css('top', 190 + 'px');
                    ball.css('left', 250 + 'px');
                    ballDir = (Math.floor(Math.random() * (360) + 1)) * (Math.PI / 180);
                    dist = 2;
                    i = 0;
                }
                aiMove();
                detectGoal();
            }, 5);
        }
        starting = false;
    });
});
