const newProgram = new Date("10 May 2022 16:30:00").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();
    var diffrence = newProgram - now;

    var days = Math.floor(diffrence / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diffrence % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diffrence % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (diffrence < 0) {
        clearInterval(x);
        document.getElementById("days").innerHTML = "0";
        document.getElementById("hours").innerHTML = "0";
        document.getElementById("minutes").innerHTML = "0";
        document.getElementById("seconds").innerHTML = "0";
    }
}, 1000);






