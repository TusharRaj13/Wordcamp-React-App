import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CalendarGrid from './CalendarGrid'
import { SetStartAt, SetDays, InitializeCalendar, ChangeMonth } from '../actions/Calendar-actions'

function CalendarView() {

    const dispatch = useDispatch();

    const cal = useSelector(state => state.CalendarReducer);

    const arr = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    useEffect(()=>{
        const dd = new Date();
        let nd = new Date(dd.getFullYear(), dd.getMonth(), 1);
        console.log(nd.getDay());
        dispatch(SetStartAt(nd.getDay()));
        nd = new Date(dd.getFullYear(), dd.getMonth()+1, 0);
        console.log(nd.getDate(), nd);
        dispatch(SetDays(nd.getDate()));
        dispatch(InitializeCalendar(dd.getFullYear(), dd.getMonth()+1, dd.getDate()))
    },[])

    const prevMonth = () => {
        var m = cal.current_month;
        var y = cal.current_year;
        m = m-1;
        if(m == 0)
        {
            m=12;
            y=y-1;
        }
        ChangeCal(m,y);
    }

    const nextMonth = () => {
        var m = cal.current_month;
        var y = cal.current_year;
        m = m+1;
        if(m == 13)
        {
            m=1;
            y=y+1;
        }
        ChangeCal(m,y);
    }

    function ChangeCal(m,y){
        dispatch(ChangeMonth(m,y));
        let nd = new Date(y, m-1, 1);
        console.log(nd.getDay());
        dispatch(SetStartAt(nd.getDay()));
        nd = new Date(y, m, 0);
        console.log(nd.getDate(), nd);
        dispatch(SetDays(nd.getDate()));
    }

    return (
        <div>
            <div style={{background: 'var(--dark2)', color: 'var(--dark-txt)', display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', height:'6vh', borderBottom:'1px solid var(--dark0)'}}>
                <button className="btn" onClick={prevMonth}>{'<<'}</button>
                <h1>{arr[cal.current_month - 1]} {cal.current_year} </h1>
                <button className="btn" onClick={nextMonth}>{'>>'}</button>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-around', background:'var(--dark2)', color: 'var(--dark-txt)', padding:'5px 0px'}}>
                <span>Sunday</span>
                <span>Monday</span>
                <span>Tuesday</span>
                <span>Wednesday</span>
                <span>Thursday</span>
                <span>Friday</span>
                <span>Saturday</span>
            </div>
            <CalendarGrid/>
        </div>
    )
}

export default CalendarView
