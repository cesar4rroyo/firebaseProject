import { types } from "../types/types";

const initialState = {
    notes: [],
    active: null
};

export const notasReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }



        default:
            return state;
    }

}
