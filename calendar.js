const eventDays={
    '2025-01-13':'CS test',
    '2025-01-23':'SQL injection midterm',
    '2025-02-18':'Python quiz',
    '2025-02-27':'Ethics test',
    '2025-04-23':'Language Portofolio ', // getting the dates with values
}

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const monthYearLabel = document.getElementById('monthYear');
const calendarDays=document.getElementById('calendarDays');
const eventPopover=document.getElementById('eventPopover'); // id taking
const eventContent = document.getElementById('eventContent');

function renderCalendar(){
    const firstDay = new Date(currentYear,currentMonth,1).getDay(); // getting the day
    const daysInMonth=new Date(currentYear,currentMonth+1,0).getDate(); // getting the date by  0 to get the last date of previous month.
    const date=new Date(currentYear,currentMonth);
    monthYearLabel.textContent=date.toLocaleString('default',{ // str conversion
        month:'long',year:'numeric'});
        calendarDays.innerHTML='';

        for(let i=0;i<firstDay;i++){ // adding the empty div for starting with correct 7 of days
            const emptyDiv=document.createElement('div');
            emptyDiv.classList.add('empty-day');
            calendarDays.appendChild(emptyDiv);
        }
        for(let day=1;day<=daysInMonth;day++){ // days with 2 digits
            const dayDiv=document.createElement('div');
            const fullDate=`${currentYear}-${String(currentMonth+1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
            
        dayDiv.textContent=day;

        if(eventDays[fullDate]){ // if eventdays are existing in fulldate 
            dayDiv.classList.add('event-day');
            dayDiv.addEventListener('mouseover',(e)=>showEvent(e,eventDays[fullDate]));
            dayDiv.addEventListener('mouseout',hideEvent);

        }
        calendarDays.appendChild(dayDiv);
        }
    }

    function showEvent(e,event){ // text showing
        eventContent.textContent=event;
        eventPopover.style.display='block';    
    }

    function hideEvent(){ // text changing
        eventPopover.style.display='none';
    }
    document.getElementById('prevMonth').addEventListener('click',()=>{ // left moving
       currentMonth--;
       if(currentMonth<0){
        currentMonth=11;
        currentYear--;
       }
       renderCalendar();

    })
    document.getElementById('nextMonth').addEventListener('click',()=>{  // right moving
        currentMonth++;
        if(currentMonth>11){
            currentMonth=0;
            currentYear++
        }
        renderCalendar();
    })
    renderCalendar();