
import React, { useEffect } from 'react'
import CalendarView from './components/CalendarView'
import MapView from './components/MapView'
import AppNav from './components/AppNav'
import { useSelector, useDispatch } from 'react-redux'
import { Initialize_list } from './actions/Camplist-actions'
import './styles/App.css'

function App() {

    const navr = useSelector(state => state.NavBarReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Initialize_list());
    }, [])

    return (
        <div>
            <AppNav/>
            <div className="AppContainer">
                {navr.cal_view && <CalendarView/>}
                {navr.map_view && <MapView/>}
            </div>
            
        </div>
    )
}

export default App
