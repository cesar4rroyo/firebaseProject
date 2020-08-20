import thunk from "redux-thunk"
import configureStore from 'redux-mock-store';
import { login } from "../../actions/auth"
import { types } from "../../types/types";
import "@testing-library/jest-dom";


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)

describe('Pruebas en authActions', () => {

    beforeEach

    test('login shoul create respective action', () => {
        const uid = "ABC123";
        const displayName = "Cesar";
        const loginAction = login(uid, displayName);

        expect(loginAction).toEqual({
            type: types.login,
            payload: {
                uid,
                displayName
            }
        });
    });

    test('should do startlogout', () => {

    })


})
