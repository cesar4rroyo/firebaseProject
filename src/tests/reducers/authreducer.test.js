import { types } from "../../types/types";
import { authReducer } from "../../reducers/authReducer";

describe('Pruebas en auth reducer', () => {

    test('debe de realizar el login', () => {

        const initState = {};
        const action = {
            type: types.login,
            payload: {
                uid: "abc",
                displayName: "Cesar"
            }
        };
        const state = authReducer(initState, action);

        expect(state).toEqual({
            uid: "abc",
            name: "Cesar"
        })

    });

    test('debe de realizar el logout', () => {

        const initState = {
            uid: "fkjdfkhdkhfdh",
            name: "Cesar"
        };
        const action = {
            type: types.logout,

        };
        const state = authReducer(initState, action);

        expect(state).toEqual({})

    });

    test('debe de devolver el initial state cuando no hay type especifico', () => {

        const initState = {
            uid: "fkjdfkhdkhfdh",
            name: "Cesar"
        };
        const action = {
            type: "dkjsfjkdsjkdfkjs",

        };
        const state = authReducer(initState, action);

        expect(state).toEqual(initState)

    });



})
