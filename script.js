// GIVEN I am using a daily planner to create a schedule
// WHEN I click into a timeblock
// THEN I can enter an event

// Variables used stated below

var hourlog = moment().hours();

var Savedata = $('.saveBtn'); //A save button variable that we will call later to tie to our eventlistner function

var CurrentDay= moment().format('[Today is] dddd, MMMM Do YYYY, ' + 'h:mm:ss a'); 
var currentTime = moment().format('h:mm:ss a');
    console.log(currentTime);

// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
 $('#CurrentDay').text(CurrentDay);

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future

function Background(){

    $('.form-control').each(function(){
        var currentTime = parseInt($(this).attr('id'));
        if(currentTime === hourlog){
            $(this).addClass('present');
        }else
        if (currentTime > hourlog){
            $(this).addClass('future');
        }else
        if(currentTime < hourlog){
            $(this).addClass('past');
        }

    });

};

//We'll need this for calling all the saved users input data for when we refresh the page.

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
//Save buttons and clear localstorage button
//This issue with my previous code allowed the entries to be erased after refresh. Looked into past notes and found preventDefault. Name is explainitory.
Savedata.on("click",function(event){
    event.preventDefault();
    var scheduledTime = $(this).siblings('.input-group-text').text();
    var schedule = $(this).siblings('.form-control').val();
    localStorage.setItem(scheduledTime,schedule)
})

// WHEN I refresh the page
// THEN the saved events persist

function getlocalstorage(){
    // console.log($(".hourlog"))
    $('.hourlog').each(function(){
        var scheduledTime= $(this).text();
        // console.log(scheduledTime);
        var schedule = localStorage.getItem(scheduledTime); //w3schools explained getItem localstorage well
        // console.log(schedule);
    if (schedule !== null){
        $(this).siblings('.form-control').val(schedule);
        // console.log($(this).siblings('.form-control'));
    }
    
    });

}
$('#timewipe').on("click",function(){
    localStorage.clear();
});

Background();
getlocalstorage();
