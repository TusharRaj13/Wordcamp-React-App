export const SetStartAt = (i) => {
    return {
        type: 'SET_START_AT',
        payload: i
    }
}

export const SetDays = (i) => {
    console.log("DD", i);
    switch(i){
        case 28:
            return { type: 'SET_M28' };
        case 29:
            return { type: 'SET_M29' };
        case 30:
            return { type: 'SET_M30' };
        case 31:
            return { type: 'SET_M31' };
        default:
            return { type: 'SET_M30' };
    }
}

export const InitializeCalendar = (ty, tm, td) => {
    var d = {
        "ty": ty,
        "tm": tm,
        "td": td
    };
    return { type: 'INIT_CAL', payload: d };
}

export const ChangeMonth = (cm, cy) => {
    var d = {
        "cm": cm,
        "cy": cy
    };
    return { type: 'CHANGE_MONTH', payload: d};
}

export const SelectDate = (sy, sm, sd) => {
    var d = {
        "sy": sy,
        "sm": sm,
        "sd": sd
    }
    return { type: 'SELECT_DATE', payload: d};
}