import {types} from "./types";

export const fetchUserAction = (user) => {
    return async (dispatch) => {
        const options = {
            method: 'POST',
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        const response = await fetch('https://jsonplaceholder.typicode.com', options);
        dispatch(addUserAction)
    }
}

export const addUserAction = (user) => {
    return {
        type: types.USERS,
        payload: user,
    };
};