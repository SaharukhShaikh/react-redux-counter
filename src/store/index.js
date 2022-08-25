import {legacy_createStore as createStore } from 'redux'

const reducer = (state = {num: 0}, action) => {
    if(action.type === "INCREASE") {
        return {num: state.num+ 1 }
    }
    if (action.type === "DECREASE") {
        return{ num: state.num -1 }
    } 
    if (action.type === "INCREASEBY") {
        return { num: state.num + action.payload}
    }
    return state;
} 

const store = createStore(reducer)
export default store