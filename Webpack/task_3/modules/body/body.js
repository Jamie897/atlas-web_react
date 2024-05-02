import $ from 'jquery';
import _ from 'lodash';

let count = 0;

function updateCounter() {
  count++;
  $('#count').text(`${count} clicks on the button`);
  console.log(`${count} clicks`);
}

$(document).ready(function () {
  $('#body').append('<p>Dashboard data for the students</p>');
  $('#body').append('<button id="startButton">Click here to get started</button>');
  $('#body').append('<p id="count"></p>');

  $('#startButton').click(_.debounce(updateCounter, 500));
});