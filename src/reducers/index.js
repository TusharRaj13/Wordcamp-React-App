import CampListReducer from './CampList-reducer';
import CalendarReducer from './Calender-reducer';
import NavBarReducer from './NavBar-reducer';

import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    CampListReducer,
    CalendarReducer,
    NavBarReducer
})

export default rootReducer;