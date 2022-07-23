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
  var task = localStorage.getItem($(this).attr('id'));
  if (task) {
    $(this).siblings('textarea').val(task);
  }
});

$('button').each(function () {
  $(this).click(function () {
    var id = $(this).siblings('div').attr('id');
    var task = $(this).siblings('textarea').val();
    localStorage.setItem(id, task);
  });
});

// Time blocks for that day

// Click into a time block

// Click the save button for that time block and save in local storage and saved event persists
//Saves our scheduled item
