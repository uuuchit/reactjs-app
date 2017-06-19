import {initialstate} from './initialState';
import {combineReducers} from 'redux';
 var listReducer = (state=initialstate(), action)=> {
    switch(action.type){
        case 'DETA': {
            // var activePackage= state.packages.filter(
            //     (item)=>{
            //         return item.id === action.payload;
            //     }
            // ); 
            return {...state, activePackage: action.payload}
            break;
        }
        case 'DEC': {
            return {...state, value: state.value- action.payload};
            break;
        }

    }
    return state;
}
var activeReducer = (state= null, action)=>{
     switch(action.type){
        case 'DETAIL': {
            return  action.payload
            break;
        }
        case 'DEC': {
            return {...state, value: state.value- action.payload};
            break;
        }

    }
    return state;
}
var reducer = combineReducers({
    packages: listReducer,
    activePackage: activeReducer
})
export default reducer;