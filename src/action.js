export function getDetail(id){
    return {
        type: 'DETAIL',
        payload: id
    }
}
export function secondAction(){
    return {
        type: 'DEC',
        payload: 1
    }
}