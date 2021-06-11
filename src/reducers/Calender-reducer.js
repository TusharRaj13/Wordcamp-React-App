const m28 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
const m29 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29];
const m30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
const m31 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
const initial = {
    start_at: 0,
    days: [],
    today_year: 0,
    today_month: 0,
    today_date: 0,
    current_year:0,
    current_month:0,
    current_date:0,
    selected_year:0,
    selected_month:0,
    selected_date:0
}
const CalenderReducer = (state = initial, action) => {
    switch(action.type){
        case 'INIT_CAL':
            state = {...state, today_year: action.payload.ty, today_month: action.payload.tm, today_date: action.payload.td, current_year: action.payload.ty, current_month: action.payload.tm, current_date: action.payload.td }
            return state;
        case 'SET_M28':
            state = {...state, days: m28};
            return state;
        case 'SET_M29':
            state = {...state, days: m29};
            return state;
        case 'SET_M30':
            state = {...state, days: m30};
            return state;
        case 'SET_M31':
            state = {...state, days: m31};
            return state;
        case 'SET_START_AT':
            state = {...state, start_at: action.payload};
            return state;
        case 'CHANGE_MONTH':
            state = {...state, current_month: action.payload.cm, current_year: action.payload.cy }
            return state;
        case 'SELECT_DATE':
            state = {...state, selected_year: action.payload.sy, selected_month: action.payload.sm, selected_date: action.payload.sd };
            return state;
        default:
            return state;
    }
}

export default CalenderReducer;