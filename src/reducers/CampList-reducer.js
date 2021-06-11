const CampListReducer = (state = [], action) => {
    switch(action.type){
        case 'INITIALIZE':
            state = action.payload;
            return state;
        case 'ADD_CAMPS':
            state = state.concat(action.payload);
            return state;
        default:
            return state;
    }
}
export default CampListReducer;