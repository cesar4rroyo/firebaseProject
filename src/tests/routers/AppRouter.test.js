import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { login } from '../../actions/auth';
import { AppRouter } from '../../routers/AppRouter';
import { act } from "@testing-library/react"
import { firebase } from "../../firebase/config"
import "@testing-library/jest-dom"
import Swal from 'sweetalert2';



jest.mock("../../actions/auth", () => ({
    login: jest.fn(),

}))
jest.mock("sweetalert2", () => ({
    fire: jest.fn(),

}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null

    },
    notes: {
        active: {
            id: "ABC",

        },
        notes: []
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();




describe('Pruebas en <AppRouter />', () => {
    test('Debe de llamar al login si estoy autenticado', async () => {

        let user;

        await act(async () => {
            const userCred = await firebase.auth().signInWithEmailAndPassword("test@hotmail.com", "123456");
            user = userCred.user;
            const wrapper = mount(
                <Provider store={store}>
                    <MemoryRouter>
                        <AppRouter />
                    </MemoryRouter>
                </Provider>

            );
        })

        expect(login).toHaveBeenCalledWith("VhbdBO1eIFdA6ZJR87T8QvbQwII2", null);

    })

})
