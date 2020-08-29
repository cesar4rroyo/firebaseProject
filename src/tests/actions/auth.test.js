import thunk from "redux-thunk"
import configureStore from 'redux-mock-store';
import { login, startLogout, startLoginEmailPassword } from "../../actions/auth"
import { types } from "../../types/types";


const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {}

let store = mockStore(initState)

describe('Pruebas en authActions', () => {

    beforeEach(() => {
        store = mockStore(initState)
    })

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

    test('should do startlogout', async () => {
        await store.dispatch(startLogout());
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.logout
        });

        expect(actions[1]).toEqual({
            type: types.notesLogoutCleaning
        });
    })

    test('should init satrtLoginWithEmailAndPassword', async () => {
        await store.dispatch(startLoginEmailPassword("test@hotmail.com", "123456"));
        const actions = store.getActions();

        expect(actions[1]).toEqual({
            type: types.login,
            payload: {
                uid: "VhbdBO1eIFdA6ZJR87T8QvbQwII2",
                displayName: null
            }
        })
    })



})
