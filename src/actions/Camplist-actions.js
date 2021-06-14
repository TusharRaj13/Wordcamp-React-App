export const Initialize_list = () => {
    return (dispatch) => {
        return fetch("https://central.wordcamp.org/wp-json/wp/v2/wordcamps")
        .then(response => response.json())
        .then(json => dispatch( { type: 'INITIALIZE', payload: json }))
    } 
        
}

export const Add_Camps = async (page) => {
    return (dispatch) => {
        return fetch(`https://central.wordcamp.org/wp-json/wp/v2/wordcamps?page=${page}`)
        .then(response => response.json())
        .then(json => dispatch({ type: 'ADD_CAMPS', payload: json }))
    } 
}