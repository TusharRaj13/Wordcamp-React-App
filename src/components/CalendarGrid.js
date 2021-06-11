import React from 'react'
import '../styles/CalendarGrid.css'
import { useSelector, useDispatch } from 'react-redux'
import { SelectDate } from '../actions/Calendar-actions';

function CalendarGrid() {
    // const daysInMonth = 30;
    // const startAt = 1;
    // const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

    const startAt = useSelector(state => state.CalendarReducer.start_at);
    const arr = useSelector(state => state.CalendarReducer.days);
    const cal = useSelector(state => state.CalendarReducer);
    const dispatch = useDispatch();

    // console.log(startAt, arr);
    const selectdate = (i) => {
        dispatch(SelectDate(cal.current_year, cal.current_month, i));
    }

    return (
        <div className="CalGrid">
           { arr.map((item,index) => {
               var t = (new Date() - new Date(cal.current_year, cal.current_month-1, item));
           return (<div key={index} onClick={() => selectdate(item)} className={`CalItem            
           ${ t>86400000 ? "pastDay" : t<0 ? "futureDay" : ""}
           ${(cal.today_year == cal.current_year && cal.today_month == cal.current_month && cal.today_date == item) ? "presentDay" : ""}`} 
           style={{gridColumnStart:((startAt+index)%7)+1 }}>
               <h1>{item}</h1>
           </div>)})}
        </div>
    )
}

export default CalendarGrid
