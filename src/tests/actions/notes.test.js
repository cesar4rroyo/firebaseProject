import Enzyme from 'enzyme';
import configureStore from 'redux-mock-store';
import thunk from "redux-thunk"
import { startNewNote, startLoadingNotes, startSaveNotes, startUploading } from '../../actions/notes';
import { types } from '../../types/types';
import { db } from '../../firebase/config';
import { fileUpload } from '../../helpers/fileUpload';


jest.mock("../../helpers/fileUpload", () => ({
    fileUpload: jest.fn(() => {
        return "https://test/test.jpg";
    })
}))

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const initState = {
    auth: {
        uid: "TESTING"
    },
    notes: {
        active: {
            id: "IlzCDHW0hUmoij1LIlqx",
            title: "hola",
            body: "mundo"
        }
    }
}

let store = mockStore(initState)


describe('Pruebas con las acciones de notes', () => {

    beforeEach(() => {
        store = mockStore(initState)
    })


    test('Debe de crear una nueva nota startNewNote', async () => {

        await store.dispatch(startNewNote());
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: "",
                body: "",
                date: expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: "",
                body: "",
                date: expect.any(Number)
            }
        });

        const docId = actions[0].payload.id;
        await db.doc(`TESTING/journal/notes/${docId}`).delete();

    });

    test('startLoading notes debe cargar las notas', async () => {

        await store.dispatch(startLoadingNotes("TESTING"));

        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array),
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number),

        }
        expect(actions[0].payload[0]).toMatchObject(expected)

    });

    test('should startSaveNote debe actualizar la nota', async () => {
        const note = {
            id: "IlzCDHW0hUmoij1LIlqx",
            title: "titulo",
            body: "body",
        }
        await store.dispatch(startSaveNotes(note));
        const actions = store.getActions();

        expect(actions[0].type).toBe(types.notesUpdated);

        const docRef = await db.doc(`/TESTING/journal/notes/${note.id}`).get();

        expect(docRef.data().title).toBe(note.title);

    });

    test('startUploading debe de actualizar el url del entry', async () => {

        const file = new File([], "foto.jpg");

        await store.dispatch(startUploading(file));


        const docRef = await db.doc(`/TESTING/journal/notes/IlzCDHW0hUmoij1LIlqx`).get();
        expect(docRef.data().url).toBe("https://test/test.jpg");


    })




})


