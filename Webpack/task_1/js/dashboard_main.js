// Import jQuery
import $ from 'jquery';
// Import debounce function from Lodash
import debounce from 'lodash/debounce';

// Function to update the counter
function updateCounter() {
    let count = 0; // Initialize count
    return function() {
        count++; // Increment count each time the button is clicked
        // Update the content of the paragraph element with id='count'
        $('#count').text(`${count} clicks on the button`);
    };
}

// Wait for the DOM to be ready
$(document).ready(function() {
    // Add elements to the body
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button id="startBtn">Click here to get started</button>');
    $('body').append('<p id="count"></p>');
    $('body').append('<p>Copyright - Holberton School</p>');

    // Get a reference to the button element
    const $button = $('#startBtn');

    // Bind the debounce function to the click event of the button
    $button.on('click', debounce(updateCounter(), 500));
});
