// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

// Variables used stated below
var hourlog;

var hour = moment().hours();
var EightAm = $("#08");
var NineAm = $("#09");
var TenAm = $("#10");
var ElevenAm = $("#11");
var TwelvePm = $("#12");
var OnePm = $("#13");
var TwoPm = $("#14");
var ThreePm = $("#15");
var FourPm = $("#16");
var FivePm = $("#17");
var SixPm = $("#18");
var SevenPm = $("#19");
var EightPm = $("#20");


var UserInput;
var hourlength

//Add moments.js
var currenttime = moment().format('h:mm:ss a');
var currentdate = moment().format('dddd') + "" + moment().format("D MM YYYY");


//Background
function pagedesign(){
    var timelog =parseInt($(this).attr("id"));
    hour = parseInt(hour);
    console.log(hour);
    console.log(timelog);
    //if else function for present, past, and future events
    if(hour>timelog){
        $(this).addClass("present");
    }else
    if (hour < timelog){
        $(this).addClass("past");
    }else{
        $(this).addClass("future");
    }

}
//overall function. Code goes in here
function initPage(){
//Notes: parse is used with local storage

console.log("Current Time"+ hour);

var init8am = JSON.parse(localStorage.getItem("08:00am"));
EightAm.val(init08);

var init9am = JSON.parse(localStorage.getItem("09:00am"));
NineAm.val(init09);

var init10am = JSON.parse(localStorage.getItem("08:00am"));
TenAm.val(init10);

var init11am = JSON.parse(localStorage.getItem("08:00am"));
ElevenAm.val(init11);

var init12pm = JSON.parse(localStorage.getItem("12:00pm"));
TwelvePm.val(init12);

var init1pm = JSON.parse(localStorage.getItem("13:00am"));
OnePm.val(init13);

var init8am = JSON.parse(localStorage.getItem("14:00am"));
TwoPm.val(init14);

var init8am = JSON.parse(localStorage.getItem("15:00am"));
ThreePm.val(init15);

var init8am = JSON.parse(localStorage.getItem("16:00am"));
FourPm.val(init16);

var init8am = JSON.parse(localStorage.getItem("17:00am"));
FivePm.val(init17);

var init8am = JSON.parse(localStorage.getItem("18:00am"));
SixPm.val(init18);

var init8am = JSON.parse(localStorage.getItem("19:00am"));
SevenPm.val(init19);

var init8am = JSON.parse(localStorage.getItem("20:00am"));
EightPm.val(init20);


localStorage.setItem(hourlength, Json.stringfy(userInput));
}

// Dates and Hour tracking

var interval = setInterval(function(){
    $('#currentday').html(currentmoment.format('MM DD YYYY')+ ' ' + currentmoment.format('dddd').substring(0,3).touppercase());

    $('#current').html(currentdate + " " + currentmoment.format('hh:mm:ss A'));

}



//If user wants to refresh/clear their planner

$("refresh-page").on("click",function(){
    localStorage.clear();
    initPage();
})

$(document).ready(function(){
    initPage()
    pagedesign()

    $(".saveBtn").on("click", function(){
        user-input = $(this).siblings(".form-control").val().trim();
        console.log(user-input);
        hourlength = $(this).siblings(".input-group-prepend").text().trim();
        console(hourlength)
    }
    )}