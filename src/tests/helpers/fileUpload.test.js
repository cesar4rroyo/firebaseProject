const { fileUpload } = require("../../helpers/fileUpload");


describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retornar el URL', async () => {

        const resp = await fetch("https://cde.laprensa.e3.pe/ima/0/0/2/3/8/238082.jpg");
        const blob = await resp.blob();
        const file = new File([blob], "foto.png")
        const url = await fileUpload(file)

        expect(typeof url).toBe("string");
    });

    test('debe de retornar un error', async () => {

        const file = new File([], "foto.png")
        const url = await fileUpload(file)

        expect(url).toBe(null);
    })

})
