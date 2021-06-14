const initial = {
    cal_view : true,
    map_view : false
}

const NavBarReducer = (state = initial, action) => {
    switch(action.type){
        case 'SELECT_CAL':
            state = { cal_view: true, map_view: false };
            return state;
        case 'SELECT_MAP':
            state = { cal_view: false, map_view: true };
            return state;
        default:
            return state;
    }
}
export default NavBarReducer;