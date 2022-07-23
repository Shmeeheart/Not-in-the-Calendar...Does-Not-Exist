// List of global variables
var events = {};

// Display currentDay
var currentDay = moment().format('[Current Day:] dddd MMMM Do YYYY');
var timeEl = $('#currentDay');
timeEl.text(currentDay);

var currentHour = moment().format('HH');
$('.hour').each(function () {
  var id = $(this).attr('id').split('-')[1];
  if (currentHour > id) {
    $(this).siblings('textarea').addClass('past');
  } else if (currentHour == id) {
    $(this).siblings('textarea').addClass('present');
  } else {
    $(this).siblings('textarea').addClass('future');
  }
});

// Time blocks for that day

// Click into a time block

// Click the save button for that time block and save in local storage and saved event persists
