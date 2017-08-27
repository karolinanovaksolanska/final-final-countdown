/**
 * Created by Kaja on 27.08.2017.
 */

function update_countdown(countdown, params) {
    segments = new Array('y', 'd', 'h', 'm', 's');
    for (var segment in segments) {

        param = segments[segment];

        if (!params[param]) {
            countdown.find('.' + param).addClass('empty');
        } else {
            countdown.find('.' + param).removeClass('empty');
        }
        countdown.find('.' + param + ' .number').html(params[param]);

        console.log(countdown.find('.' + param + ' .number'));
        console.log((params[param] + '').length);

    }

    if (y == 1) {
        countdown.find('.y .unit').html('year');
    } else {
        countdown.find('.y .unit').html('years');
    }

    if (d == 1) {
        countdown.find('.d .unit').html('day');
    } else {
        countdown.find('.d .unit').html('days');
    }

    if (h == 1) {
        countdown.find('.h .unit').html('hour');
    } else {
        countdown.find('.h .unit').html('hours');
    }

    if (m == 1) {
        countdown.find('.m .unit').html('minute');
    } else {
        countdown.find('.m .unit').html('minutes');
    }

    if (s == 1) {
        countdown.find('.s .unit').html('second');
    } else {
        countdown.find('.s .unit').html('seconds');
    }
}

function get_date_diff(date_1, date_2) {
    diff = get_time_diff(date_1, date_2);

    y = Math.floor(diff / 31536000);
    diff -= y * 31536000;

    d = Math.floor(diff / 86400);
    diff -= d * 86400;

    h = Math.floor(diff / 3600);
    diff -= h * 3600;

    m = Math.floor(diff / 60);
    diff -= m * 60;

    s = diff;

    return {y: y, d: d, h: h, m: m, s: s};
}

function get_time_diff(date_1, date_2) {
    return Math.round((date_1 - date_2) / 1000)
}

function loop(end) {
    now           = new Date();
    mandate_start = new Date(2013, 2,  7,  0, 0, 0, 0);
    apocalypse    = database
    mandate_end   = end;
    update_countdown($('#countdown'), get_date_diff(mandate_end, now));
}


const database = [
    {"date": new Date(2017, 10, 1, 0, 0, 0, 0), "name": "Nibiru/Planet X will again collide with Earth", "text": "According to the ideas of Zecharia Sitchin, the name of a twelfth planet in the Solar System with a highly eccentric 3,600-year orbit that periodically comes close to the Earth, causing cataclysms. Sitchin based his claims on creative (mis)translations of ancient Sumerian texts and on no-less-creative interpretation of ancient Sumerian images. The word Nibiru does in fact refer to a planet known to the ancient Sumerians. This planet is more commonly known as Jupiter, and is not expected to collide with the earth anytime soon."},
]

function getCurrentApocalypse($scope){
    var now = new Date();
    for (var i = 0; i < database.length; i++){
        if (database[i].date > now) {
            $('#heading1').text(database[i].name);
            $('#paragraph1').text(database[i].text)
            return database[i];
        }
    }
}

// Main loop.
var data = getCurrentApocalypse()
loop(data.date);
setInterval(function(){
    loop(data.date);
}, 1000);
