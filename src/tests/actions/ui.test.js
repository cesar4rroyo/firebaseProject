const { setError, startLoading, removeError, finishLoading } = require("../../actions/ui");
const { types } = require("../../types/types");



describe('test at ui-actions', () => {
    test('todas las accciones deben de funciona', () => {
        const action = setError("Error");
        expect(action).toEqual({
            type: types.uiSetError,
            payload: "Error"
        })
    })

    const removeErrorAction = removeError();
    const startLoadingAction = startLoading();
    const finishLoadingAction = finishLoading();

    expect(removeErrorAction).toEqual({
        type: types.uiRemoveError,
    });
    expect(startLoadingAction).toEqual({
        type: types.uiStartLogin,
    });
    expect(finishLoadingAction).toEqual({
        type: types.uiFinishLogin,
    });

})
