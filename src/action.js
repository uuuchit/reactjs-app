export function firstAction(){
    return {
        type: 'INC',
        payload: 1
    }
}
export function secondAction(){
    return {
        type: 'DEC',
        payload: 1
    }
}