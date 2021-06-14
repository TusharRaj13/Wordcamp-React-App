import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ResetSelection } from '../actions/Calendar-actions';
import '../styles/CalendarEventView.css'

function CalendarEventView() {

    const cal = useSelector(state => state.CalendarReducer);
    const dispatch = useDispatch();

    const arr = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug","Sep", "Oct", "Nov", "Dec"];

    const reset = () => {
        dispatch(ResetSelection());
    }

    return (
        <div className="calEventView">
            <div className="calEventViewHeader">
                <h1>{arr[cal.selected_month-1]} {cal.selected_date}, {cal.selected_year}</h1>
                <button className="btn" onClick={reset}>x</button>
            </div>

        </div>
    )
}

export default CalendarEventView
