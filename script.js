var player = $('#player');
var cpu = $("#cpu");
var ball = $("#ball");
var ballDir = round(Math.random() * (365 - 1) + 1);
$(document).keydown(function(e) {
	if (e.keyCode === 68 && player.position().left < 215) {
		player.css("left", player.position().left + 5 + 'px');
	} else if (e.keyCode === 65 && player.position().left > -215) {
		player.css("left", player.position().left - 5 + 'px');
	}
});
