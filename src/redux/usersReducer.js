import {types} from "./types";

const initialState = {
    userList: [],
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USERS: {
            return {...state,
                userList: [...state.userList, action.payload]}
        }
        default: return state
    }
}