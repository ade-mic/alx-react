import $ from 'jquery';
import { debounce } from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('Copyright - Holberton School');

let count = 0;

let updateCounter = _.debounce(function() {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
}, 300);

$('button').on('click', updateCounter);
