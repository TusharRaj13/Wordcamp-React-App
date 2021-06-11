import CampListReducer from './CampList-reducer';
import CalendarReducer from './Calender-reducer';

import { combineReducers} from 'redux';

const rootReducer = combineReducers({
    CampListReducer,
    CalendarReducer
})

export default rootReducer;