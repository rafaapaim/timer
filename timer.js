var sec = 0;
var min = 0;
var hour = 0;

var interval;

function start() {
    counter();
    interval = setInterval(counter, 1000);
}

function pause() {
    clearInterval(interval);
}

function stop() {
    clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    document.getElementById('counter').innerText = '00:00:00'
}

function counter() {
    sec++;
    if (sec == 60) {
        sec = 0;
        min++;
        if (min == 60) {
            min = 0;
            hour++;
        }
    }
    var format = (hour < 10 ? '0' + hour : hour) + ':' + (min < 10 ? '0' + min : min) + ':' + (sec < 10 ? '0' + sec : sec);
    document.getElementById('counter').innerText = format;
}
