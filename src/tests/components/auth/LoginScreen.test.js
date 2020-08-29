import React from 'react';
import { LoginScreen } from '../../../components/auth/LoginScreen';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import thunk from "redux-thunk"
import configureStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router-dom';
import { startGoogleLogin, startLoginEmailPassword } from '../../../actions/auth';

jest.mock("../../../actions/auth", () => ({
    startGoogleLogin: jest.fn(),
    startLoginEmailPassword: jest.fn()
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {},
    ui: {
        loading: false,
        msgError: null

    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <MemoryRouter>
            <LoginScreen />
        </MemoryRouter>
    </Provider>

);

describe('Test in <LoginScreen />', () => {
    beforeEach(() => {
        store = mockStore(initState);
        jest.clearAllMocks();
    })

    test('should do done correctly ', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('should de disparar la accion startLogingSCreen', () => {
        wrapper.find(".google-btn").prop("onClick")();
        expect(startGoogleLogin).toHaveBeenCalled();
    })

    test('debe de disparar el startLogin con sus argumentos respectivos', () => {
        wrapper.find("form").prop("onSubmit")({
            preventDefault() { }
        });
        expect(startLoginEmailPassword).toHaveBeenCalledWith("cesar@gmail.com", "123456");
    })





})
