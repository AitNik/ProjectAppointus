import { createStore, combineReducers } from 'redux'


const token = localStorage.getItem("projecttokenUsername");

const login = {
    logged_in: true,
    name: token,
    username: "123456",  
}

function loginReducer(state = login, action) {

    switch(action.type){
        case "LOGIN": return {
            ...state,
            logged_in: true
        }
        case "LOGOUT": return {
            ...state,
            logged_in: false
        }
        case "SET_NAME": return {
            ...state,
            name: action.payload
        }
        case "SET_USERNAME": return {
            ...state,
            username: action.payload
        }   
        
        default: return state
    }
}


const Reducer = combineReducers({
    login: loginReducer
})

const store = createStore(Reducer)

export default store