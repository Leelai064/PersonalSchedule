// GIVEN I am using a daily planner to create a schedule
// WHEN I click into a timeblock
// THEN I can enter an event


// Variables used stated below

var hourlog = moment().hours();
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

var Savedata;
var hourlength;

var CurrentDay= moment().format('[Today is] dddd, MMMM Do YYYY, ' + 'h:mm:ss a'); 
var currentTime = moment().format('h:mm:ss a');
    console.log(currentTime);

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
 $('#CurrentDay').text(CurrentDay);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//overall function. Code goes in here

function init(){
    //Notes: parse is used with local storage
    
    console.log("Current Time"+ hourlog);
    
    var init8 = JSON.parse(localStorage.getItem("08:00am"));
    EightAm.val(init08);
    
    var init9 = JSON.parse(localStorage.getItem("09:00am"));
    NineAm.val(init09);
    
    var init10 = JSON.parse(localStorage.getItem("10:00am"));
    TenAm.val(init10);
    
    var init11 = JSON.parse(localStorage.getItem("11:00am"));
    ElevenAm.val(init11);
    
    var init12 = JSON.parse(localStorage.getItem("12:00pm"));
    TwelvePm.val(init12);
    
    var init13 = JSON.parse(localStorage.getItem("13:00pm"));
    OnePm.val(init13);
    
    var init14 = JSON.parse(localStorage.getItem("14:00pm"));
    TwoPm.val(init14);
    
    var init15 = JSON.parse(localStorage.getItem("15:00pm"));
    ThreePm.val(init15);
    
    var init16 = JSON.parse(localStorage.getItem("16:00pm"));
    FourPm.val(init16);
    
    var init17 = JSON.parse(localStorage.getItem("17:00pm"));
    FivePm.val(init17);
    
    var init18 = JSON.parse(localStorage.getItem("18:00pm"));
    SixPm.val(init18);
    
    var init19 = JSON.parse(localStorage.getItem("19:00pm"));
    SevenPm.val(init19);
    
    var init20 = JSON.parse(localStorage.getItem("20:00pm"));
    EightPm.val(init20);
     
    // localStorage.setItem(hourlength, Json.stringfy(userInput));
}

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

$(".form-control").each(function(){

let time = $(this).attr("id");

if (currentTime == time){
    $(this).addClass("present");
}else
if(currentTime<time){
    $(this).removeClass("present");
    $(this).addClass("future");
}else
if(currentTime >time){
    $(this).removeClass("future");
    $(this).addClass("past");
}

return;

});


//We'll need this for calling all the saved users input data for when we refresh the page.

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//Save buttons and clear localstorage button

$(".saveBtn").on("click", function(){
    Savedata =(this).siblings(".form-control").val().trim();
    console.log(Savedata);
    hourlength= $(this).siblings(".intput-group-prepend").text().trim();
    console.log(hourlength);
    localStorage.setItem(hourlength, JSON.stringify(Savedata))
});

$('#timewipe').on("click",function(){
    localStorage.clear();
    initPlanner();
})

// WHEN I refresh the page
// THEN the saved events persist
// $(document).ready(function(){
//     init()

// })
// getlocalstorage();

// function getlocalstorage(){

//     for(var i=0; i<12; i++){
//         var Savedata = localstorage.getItem("id-"+i);
//         if(Savedata!=null){
//             $('input[id-'+i+']').val(Savedata);
//         }
//     }

// }
