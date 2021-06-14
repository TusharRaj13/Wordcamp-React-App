import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FaCalendar, FaMap } from 'react-icons/fa'
import '../styles/AppNav.css'

function AppNav() {

    const navr = useSelector(state => state.NavBarReducer);
    const dispatch = useDispatch();

    const toggleNav = (val) => {
        if(val === 'cal')
            dispatch({ type: 'SELECT_CAL'});
        else
            dispatch({ type: 'SELECT_MAP'});
    }

    return (
        <div className="mainNav">
            <ul>
                <li onClick={() => toggleNav('cal')} title="Calendar View"><FaCalendar className="ico" color={navr.cal_view ? "#0078d4" : "#fff"}/></li>
                <li onClick={() => toggleNav('map')} title="Map View"><FaMap className="ico" color={navr.map_view ? "#0078d4" : "#fff"}/></li>
            </ul>
        </div>
    )
}

export default AppNav
