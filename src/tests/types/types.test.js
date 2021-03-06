const { types } = require("../../types/types");


describe('Pruebas con los types', () => {
    test('debe tener estos types ', () => {
        expect(types).toEqual({
            login: "[Auth] Login",
            logout: "[Auth] Logout",

            uiSetError: "[UI] Set Error",
            uiRemoveError: "[UI] Remove Error",
            uiStartLogin: "[UI] Start loading",
            uiFinishLogin: "[UI] Finish loading",

            notesAddNew: "[Notes] New note",
            notesActive: "[Notes] Set active note",
            notesLoad: "[Notes] Load notes",
            notesUpdated: "[Notes] Update note",
            notesFileUrl: "[Notes] Update img url",
            notesDelete: "[Notes] Delete note",
            notesLogoutCleaning: "[Notes] Logout Cleaning",

        })
    })

})
