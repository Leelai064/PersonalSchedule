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

var hour = moment().hours();
var EightAm = $("#8am");
var NineAm = $("#9am");
var TenAm = $("#10am");
var ElevenAm = $("#11am");
var TwelvePm = $("#12pm");
var OnePm = $("#1pm");
var TwoPm = $("#2pm");
var ThreePm = $("#3pm");
var FourPm = $("#4pm");
var FivePm = $("#5pm");
var SixPm = $("#6apm");
var SevenPm = $("#7pm");
var EightPm = $("#8pm");
var NinePm = $("#9pm");

var UserInput;
var hourlength

//Add moments

//overall function. Code goes in here
function initPage(){


//Research if other functions can go within a main function





localStorage.setItem(hourlength, Json.stringfy(userInput));
}
//If user wants to refresh/clear their planner
$("refresh-page").on("click",function(){
    localStorage.clear();
    initPage();
})
