// let currTime=document.getElementById("curr_time");
let curr_hours = document.getElementById("hours");
let curr_minutes = document.getElementById("minutes");
let curr_seconds = document.getElementById("second");
let curr_date = document.getElementById("date");
let curr_month = document.getElementById("month");
let curr_year = document.getElementById("year");
let curr_day = document.getElementById("day");

let calender = new Date();
console.log(calender)

let day = calender.getDay();
let date = calender.getDate();
let month = calender.getMonth();  //0-11
let year = calender.getFullYear();
let hour = calender.getHours();
let minutes = calender.getMinutes();
let second = calender.getSeconds();


curr_date.innerHTML = date<10? "0"+date:date;
curr_month.innerHTML = (month + 1)<10? "0"+(month + 1):(month + 1);
curr_year.innerHTML = year;



switch (day) {
    case 0: curr_day.innerHTML = "Sunday";
        break;
    case 1: curr_day.innerHTML = "Monday";
        break;
    case 2: curr_day.innerHTML = "Tuesday";
        break;
    case 3: curr_day.innerHTML = "Wednesday";
        break;
    case 4: curr_day.innerHTML = "Thusday";
        break;
    case 5: curr_day.innerHTML = "Friday";
        break;
    case 6: curr_day.innerHTML = "saturday";
}

function refresh_page()
{
    calender = new Date();
    console.log("page refresh")
}

function Run_time() {
    second++;
    if (second == 60) {
        second = 0;
        minutes++;
        if (minutes == 60) {
            minutes = 0;
            hour++;
            if (hour == 24) {
                hour = 0;
                refresh_page()
            }
        }
    }

    curr_hours.innerHTML = hour<10? "0"+hour:hour;
    curr_minutes.innerHTML = minutes<10? "0"+minutes:minutes;
    curr_seconds.innerHTML = second<10? "0"+second:second;
}

console.log(second)
console.log(minutes)
console.log(hour)

setInterval(Run_time, 1000)


