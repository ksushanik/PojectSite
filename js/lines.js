var elements_start = document.querySelectorAll('.ability-icon img');
var elements_end = document.querySelectorAll('.ability-info');
var lines = [];
let start_socket = 'lest';

if (window.matchMedia('(max-width: 768px)').matches) {
  start_socket = 'top';
}
for (var i = 0; i < elements_start.length; i++) {
    (function (i) {
        var line = new LeaderLine(elements_start[i], elements_end[i], {hide: true});
        line.setOptions(
            {startPlug: 'square',
                endPlug: 'square',
                color: 'white',
                size: 2,
                startSocket: start_socket,
                path: 'grid'});
        lines.push(line);
        elements_start[i].addEventListener('mouseover', function () {
            line.show(['draw']);
        }, false);
        elements_start[i].addEventListener('mouseout', function () {
            line.hide();
        }, false);
    })(i);
}