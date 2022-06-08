// GIVEN I am using a daily planner to create a schedule
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

// var hourlog = moment().hours();
// var EightAm = $("#08");
// var NineAm = $("#09");
// var TenAm = $("#10");
// var ElevenAm = $("#11");
// var TwelvePm = $("#12");
// var OnePm = $("#13");
// var TwoPm = $("#14");
// var ThreePm = $("#15");
// var FourPm = $("#16");
// var FivePm = $("#17");
// var SixPm = $("#18");
// var SevenPm = $("#19");
// var EightPm = $("#20");

// var UserInput;
// var hourlength;

var CurrentDay= moment().format('[Today is] dddd, MMMM Do YYYY, ' + 'h:mm:ss a'); 
var currentTime = moment().format('h:mm:ss a');
    console.log(currentTime);



//Add moments.js


// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
 $('#CurrentDay').text(CurrentDay);
// var interval = setInterval(function(){
//     var currentMoment = moment();
//     $('#CurrentDay').html(currentMoment.format('MM DD YYYY')+ ' ' + currentMoment.format('dddd').substring(0,3).touppercase());

//     $('#CurrentDay').html(currentDate + " " + currentMoment.format('hh:mm:ss A'));

// }, 100);

// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
//overall function. Code goes in here

function initPlanner(){
    //Notes: parse is used with local storage
    
    console.log("Current Time"+ hourlog);
    
    var init8am = JSON.parse(localStorage.getItem("08:00am"));
    EightAm.val(init08);
    
    var init9am = JSON.parse(localStorage.getItem("09:00am"));
    NineAm.val(init09);
    
    var init10am = JSON.parse(localStorage.getItem("10:00am"));
    TenAm.val(init10);
    
    var init11am = JSON.parse(localStorage.getItem("11:00am"));
    ElevenAm.val(init11);
    
    var init12pm = JSON.parse(localStorage.getItem("12:00pm"));
    TwelvePm.val(init12);
    
    var init1pm = JSON.parse(localStorage.getItem("13:00pm"));
    OnePm.val(init13);
    
    var init8am = JSON.parse(localStorage.getItem("14:00pm"));
    TwoPm.val(init14);
    
    var init8am = JSON.parse(localStorage.getItem("15:00pm"));
    ThreePm.val(init15);
    
    var init8am = JSON.parse(localStorage.getItem("16:00pm"));
    FourPm.val(init16);
    
    var init8am = JSON.parse(localStorage.getItem("17:00pm"));
    FivePm.val(init17);
    
    var init8am = JSON.parse(localStorage.getItem("18:00pm"));
    SixPm.val(init18);
    
    var init8am = JSON.parse(localStorage.getItem("19:00pm"));
    SevenPm.val(init19);
    
    var init8am = JSON.parse(localStorage.getItem("20:00pm"));
    EightPm.val(init20);
    
    
    localStorage.setItem(hourlength, Json.stringfy(userInput));
}

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function color_indication(){


}
//We'll need this for calling all the saved users input data for when we refresh the page.

getlocalstorage();

function getlocalstorage(){

    for(var i=0; i<12; i++){
        var Savedata = localstorage.getItem("id-"+i);
        if(Savedata!=null){
            $('input[id-'+i+']').val(Savedata);
        }
    }

}

$('#timewipe').on("click",function(){
    localStorage.clear();
    initPlanner();
})