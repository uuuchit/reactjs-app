
var reducer = (state={test:'uchit', value: 0}, action)=> {
    switch(action.type){
        case 'INC': {
            return {...state, value: state.value+ action.payload};
            break;
        }
        case 'DEC': {
            return {...state, value: state.value- action.payload};
            break;
        }

    }
    return state;
}

export default reducer;