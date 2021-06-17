import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ResetSelection } from '../actions/Calendar-actions';
import { FaTwitter, FaGlobe } from 'react-icons/fa'
import '../styles/CalendarEventView.css'

function CalendarEventView() {

    const cal = useSelector(state => state.CalendarReducer);
    const camp_list =  useSelector(state => state.CampListReducer);
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
            <div>
                {                    
                    camp_list.camp_list.map((item, index) => {
                        //console.log(Date.UTC(cal.selected_year, cal.selected_month-1, cal.selected_date)/1000);
                        return ((+ item["Start Date (YYYY-mm-dd)"] - Date.UTC(cal.selected_year, cal.selected_month-1, cal.selected_date)/1000) === 0) &&                            
                            <div key={index}>
                                <h2>{item["title"]["rendered"]}</h2>
                                <h3>{"Location: " + item["Location"]}</h3>
                                <h4>{"Hastag: " + item["WordCamp Hashtag"]}</h4>
                                <a target="_blank" className="ico" href={"https://twitter.com/" + item["Twitter"]}><FaTwitter color="white"/></a>
                                <a target="_blank" className="ico" href={item["URL"]}><FaGlobe color="white"/></a>
                            </div>})
                }
            </div>

        </div>
    )
}

export default CalendarEventView
