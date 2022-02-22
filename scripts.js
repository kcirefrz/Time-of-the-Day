function load() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('image');
    var data = new Date();
    var time = data.getHours();
    //var time = 19; // JUST TO CHECK
    msg.innerHTML = `It is currently ${time} hours.`;
    if (time >= 0 && time < 12) {
        // GOOD MORNING!
        img.src = 'img/morning.jpg';
        document.body.style.background = '#e2cdc9';
    } else if (time >= 12 && time <= 18) {
        // GOOD AFTERNOON!
        img.src = 'img/afternoon.jpg';
        document.body.style.background = '#b9846f';
    } else {
        // GOOD NIGHT!
        img.src = 'img/night.jpg';
        document.body.style.background = '#515154';
    };
}