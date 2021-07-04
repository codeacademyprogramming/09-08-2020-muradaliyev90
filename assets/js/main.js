var date = new Date();
var month = document.querySelector('.month-days');
var todayElement = document.querySelector('.calendar-header .full-date');
var leftArrow = document.querySelector('.leftArrow');
var rightArrow = document.querySelector('.rightArrow');

var months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]


function calendar(){

    month.innerHTML = "";

    function today(){
        todayElement.innerHTML = `${date.getDate()}` + ` ${months[date.getMonth()]}` + ` ${date.getFullYear()}`;
    }

    startDate = new Date(date.getFullYear(),date.getMonth(), 1);
    lastDayOfPrevMonth = new Date(date.getFullYear(),date.getMonth(), 0).getDate();
    countOfDays = new Date(date.getFullYear(),date.getMonth() + 1, 0);

    function previousMonthDays(){
        if((42 - (countOfDays.getDate() + startDate.getDay())) > 7){
            for (let i = lastDayOfPrevMonth - startDate.getDay() + 1 - 7; i <= lastDayOfPrevMonth; i++){
                newDiv = document.createElement('div');
                newDiv.classList.add('previous-month');
                newDiv.innerHTML = i;
                month.appendChild(newDiv);
            }
        }else{
            for (let i = lastDayOfPrevMonth - startDate.getDay() + 1; i <= lastDayOfPrevMonth; i++){
                newDiv = document.createElement('div');
                newDiv.classList.add('previous-month');
                newDiv.innerHTML = i;
                month.appendChild(newDiv);
            }
        }
        previousMonth();
        selectedDay();
    }

    function monthDays(){
        for (let i = 1; i <= countOfDays.getDate(); i++) {
            newDiv = document.createElement('div');
            newDiv.classList.add('day');
            newDiv.innerHTML = i;
            month.appendChild(newDiv);
        }
        selectedDay();
    }

    function nextMonthDays(){
        if((42 - (countOfDays.getDate() + startDate.getDay())) > 7){
            for (let i = 1; i <= (42 - countOfDays.getDate() - startDate.getDay() - 7); i++){
                newDiv = document.createElement('div');
                newDiv.classList.add('next-month');
                newDiv.innerHTML = i;
                month.appendChild(newDiv);
            }
        }else{
            for (let i = 1; i <= (42 - countOfDays.getDate() - startDate.getDay()); i++){
                newDiv = document.createElement('div');
                newDiv.classList.add('next-month');
                newDiv.innerHTML = i;
                month.appendChild(newDiv);
            }
        }
        nextMonth();
        selectedDay();
    }

    today()
    previousMonthDays()
    monthDays()
    nextMonthDays()
}

calendar();

leftArrow.addEventListener('click',()=>{
    date.setMonth(date.getMonth() - 1);
    calendar();
})

rightArrow.addEventListener('click',()=>{
    date.setMonth(date.getMonth() + 1);
    calendar();
})

function selectedDay(){
    document.querySelectorAll('.month-days div').forEach((element)=>{
        element.addEventListener('click',()=>{
            document.querySelectorAll('.month-days div').forEach((element)=>{
                element.classList.remove('active');
            })
            element.classList.add('active');
        })
    })
}

function previousMonth(){
    document.querySelectorAll('.previous-month').forEach((element)=>{
        element.addEventListener('click',()=>{
            setTimeout(()=>{
                date.setMonth(date.getMonth() - 1);
                calendar();
            },100)
        })
    })
}

function nextMonth(){
    document.querySelectorAll('.next-month').forEach((element)=>{
        element.addEventListener('click',()=>{
            setTimeout(()=>{
                date.setMonth(date.getMonth() + 1);
                calendar();
            },100)
        })
    })
}

function changeToToday(){
    newDate = new Date();
    document.getElementById('fullDate').addEventListener('click',()=>{
        date.setDate(newDate.getDate());
        date.setMonth(newDate.getMonth());
        date.setFullYear(newDate.getFullYear());
        calendar();
    })
}

selectedDay();
previousMonth();
nextMonth();
changeToToday();