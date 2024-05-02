import $ from 'jquery';
import _ from 'lodash';

let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
    console.log(`${count} clicks`);
}

$(document).ready(function () {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startButton">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    $('#startButton').click(_.debounce(updateCounter, 500));
});

