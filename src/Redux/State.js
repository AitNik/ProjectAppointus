import { createStore, combineReducers } from 'redux'
const login = {
        logged_in: true,
        name: "Aman Saini",
        username: "amansaini7999",  
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

const saveddata = {
    modelselected: "",
    development_data: 1,
    monitoring_data: ["monitoring1","monitoring2","monitoring3"],
    models: ["Dmodel1","Dmodel2","Dmodel3"]
}

function datastore(state = saveddata, action) {
    switch(action.type){
        case "SELECT_MODEL": return {
            ...state,
            modelselected: action.payload
        }
        case "STORE_DEVELOPMENT": return {
            ...state,
            development_data: action.payload
        }
        case "STORE_MONITORING": return {
            ...state,
            monitoring_data: action.payload
        }
        case "STORE_MODELS": return {
            ...state,
            models: action.payload
        }   
        
        default: return state
    }
}

const Reducer = combineReducers({
    login: loginReducer,
    saved: datastore
})

const store = createStore(Reducer)

export default store