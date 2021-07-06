const SETUSER = 'SETUSER'
const  LOGOUT = 'LOGOUT'
const initialState = {
currentUser: {},
isAuth: false,
loading: false
}
export default function userReducer (state = initialState, action) {
    switch(action.type){
        case SETUSER:
            return{
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return{
                ...state,
                currentUser:{},
                isAuth :false
            }
        default:
             return state
    }
}
export const setUser = (user)=>({type: SETUSER,  payload: user})
export const logout = () => ({type: LOGOUT})