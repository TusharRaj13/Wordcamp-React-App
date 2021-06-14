const initial = {
    camp_list: [],
    page: 0
}
const CampListReducer = (state = initial, action) => {
    switch(action.type){
        case 'INITIALIZE':
            state = {page: 1, camp_list: action.payload};
            return state;
        case 'ADD_CAMPS':
            state = {...state, camp_list: camp_list.concat(action.payload)};
            return state;
        case 'PAGE_INCREMENT':
            state = {...state, page: page+1 };
            return state;
        default:
            return state;
    }
}
export default CampListReducer;