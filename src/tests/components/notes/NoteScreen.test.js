import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from "redux-thunk"
import configureStore from 'redux-mock-store';
import "@testing-library/jest-dom"
import { activeNote } from '../../../actions/notes';
import { NoteScreen } from '../../../components/notes/NoteScreen';



jest.mock("../../../actions/notes", () => ({
    activeNote: jest.fn(),

}));



const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: "1",
        name: "Cesar"
    },
    ui: {
        loading: false,
        msgError: null

    },
    notes: {
        active: {
            id: 1234,
            title: "Hola",
            body: "mundo",
            date: 0

        },
        notes: []
    }
}

let store = mockStore(initState);
store.dispatch = jest.fn();

const wrapper = mount(
    <Provider store={store}>
        <NoteScreen />
    </Provider>
)

describe('Prueba en <NoteScreen />', () => {
    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('debe de disparar el activeNote', () => {
        wrapper.find("input[name='title']").simulate("change", {
            target: {
                name: "title",
                value: "Hola de nuevo"
            }
        });
        expect(activeNote).toHaveBeenLastCalledWith(
            1234,
            {
                body: "mundo",
                title: "Hola de nuevo",
                id: 1234,
                date: 0
            }
        );
    })


})
