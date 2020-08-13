const { fileUpload } = require("../../helpers/fileUpload");
var cloudinary = require('cloudinary');

cloudinary.config({
    cloud_name: 'sample',
    api_key: '114632978349496',
    api_secret: 'RwpdRkcLx2ybtW5hr_zz_I2ZGPc'
});




describe('Pruebas en fileUpload', () => {
    test('debe de cargar un archivo y retornar el URL', async (done) => {

        const resp = await fetch("https://farm3.staticflickr.com/2476/3623181050_189380ecdf_d.jpg");
        const blob = await resp.blob();
        const file = new File([blob], "foto.png")
        const url = await fileUpload(file)

        expect(typeof url).toBe("string");

        // //borrar imagen por ID
        // const segments = url.split("/");
        // const imageId = segments[segments.length - 1].replace("jpg", ".");
        // console.log(imageId);
        // cloudinary.v2.api.delete_resources(imageId, {}, () => {
        //     done();
        // })
    });

    test('debe de retornar un error', async () => {

        const file = new File([], "foto.png")
        const url = await fileUpload(file)

        expect(url).toBe(null);
    });

})
