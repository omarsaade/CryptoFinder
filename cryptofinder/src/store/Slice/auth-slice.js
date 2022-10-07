import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    tokenData: '',
    token: '',
    logoutTimer: '',
    userIsLoggedIn: false,
};


// let logoutTimer;



//calculating remaining Time
const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime(); //time now 11000ms
    //erpiration time me3tberbina string bteje
    const adjExpirationTime = new Date(expirationTime).getTime();//time baad se3a 12000ms
    const remainingDuration = adjExpirationTime - currentTime;// 1000ms
    return remainingDuration; //nes se3a 1000ms
}




const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');// hsaye262
    const storedExpirationDate = localStorage.getItem('expirationTime');// 1,5 mins
    const remainingTime = calculateRemainingTime(storedExpirationDate); // 90 mins

    if (remainingTime <= 60000) { // < 1 min
        localStorage.removeItem('item');
        localStorage.removeItem('expirationTime');
        return null;
    }

    return {
        token: storedToken,
        duration: remainingTime,
        isLoggedIn: false,

    }
}




const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action) {
            let tokeno = action.payload[0];
            let expirationTime = action.payload[1];
            state.token = tokeno; // text
            localStorage.setItem('token', state.token);
            localStorage.setItem('expirationTime', expirationTime);
            state.tokenData = retrieveStoredToken();
            let initialToken;
            if (state.tokenData) {
                initialToken = state.tokenData.token; //eyJhbGciOiJwtdw
            }
            state.token = initialToken;
            state.userIsLoggedIn = !!state.token;

        },
        logout(state) {
            state.userIsLoggedIn = false;
            state.token = null;
            localStorage.removeItem('token');
            localStorage.removeItem('expirationTime');
            if (state.logoutTimer) {
                clearTimeout(state.logoutTimer);
            }
        },
        persist(state) {
            state.tokenData = retrieveStoredToken();
            let initialToken;
            if (state.tokenData) {
                initialToken = state.tokenData.token; //eyJhbGciOiJwtdw
            }
            state.token = initialToken;
            state.userIsLoggedIn = !!state.token;
        }

    }
});





export const authActions = authSlice.actions;


export default authSlice;


