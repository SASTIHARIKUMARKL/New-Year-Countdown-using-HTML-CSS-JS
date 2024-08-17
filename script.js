function count() {
    const newYear = new Date('January 1, 2025 00:00:00').getTime();
    const now = new Date().getTime();
    const timeleft = newYear - now;

    const day = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    const hour = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById('day').innerText = day;
    document.getElementById('hour').innerText = hour;
    document.getElementById('minute').innerText = minute;
    document.getElementById('second').innerText = second;

    if (timeleft < 0) {
        clearInterval(time);
        document.getElementById('count').innerHTML = "Happy New Year!";
    }
}

const time = setInterval(count, 1000);
