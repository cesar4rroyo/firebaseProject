import { login } from "../../actions/auth"
import { types } from "../../types/types";

describe('Pruebas en authActions', () => {
    test('login debe crear la accion respectiva', () => {
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

    test('debe de realizar el logout', () => {

    })


})
