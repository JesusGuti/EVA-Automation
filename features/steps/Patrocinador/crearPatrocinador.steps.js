import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
const { Given, When, Then } = createBdd();

Given("el usuario está en la vista de crear patrocinador",async ({page}) => {
    await page.goto("http://localhost:8000");
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'PATROCINADOR' })
    await botonMenu.click(); 
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear patrocinador' });
    await opcionCrearTipoEvento.click();
})

When("cree un patrocinador con datos validos",async ({page}) => {
    const inputNombre = await page.getByPlaceholder("Ingrese un nombre");
    await inputNombre.click();
    await inputNombre.fill("JalaSoft")
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('https://www.jalasoft.com');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/jalasoft.png');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
})

Then("se muestra el patrocinador en la tabla",async ({page}) => {
    const existePatrocinador = await page.getByText("JalaSoft.");
    await expect(existePatrocinador).toBeVisible();
    await page.close();
})

When("cree un patrocinador sin nombre",async ({page}) => {
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('https://www.coca-cola.com');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/cocacola.png');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
})

Then("se muestra una mensaje de que el nombre de patrocinador no puede ser nulo",async ({page}) => {
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    await expect(mensajeFaltaNombre).toBeVisible();
    await page.close();
})

When("cree un patrocinador con un nombre repetido",async ({page}) => {
    const inputNombre = await page.getByPlaceholder("Ingrese un nombre");
    await inputNombre.click();
    await inputNombre.fill("Coca Cola")
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('https://www.coca-cola.com');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/cocacola.png');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
})

Then("se muestra una alerta con el mensaje de que el patrocinador ya existe",async ({page}) => {
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    await expect(mensajeFaltaNombre).toBeVisible();
    await page.close();
})

When("cree un patrocinador con una imagen que pese mas de 2mb",async ({page}) => {
    const inputNombre = await page.getByPlaceholder("Ingrese un nombre");
    await inputNombre.click();
    await inputNombre.fill("Imagen grande")
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('https://www.imagengrande.com');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/7mb.jpg');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
})

Then("se muestra una alerta con el mensaje de que la imagen es muy grande",async ({page}) => {
    const mensajeImagen = await page.getByText("Archivo no válido");
    await expect(mensajeImagen).toBeVisible();
    await page.close();
})

When("cree un patrocinador con un archivo que no sea una imagen",async ({page}) => {
    const inputNombre = await page.getByPlaceholder("Ingrese un nombre");
    await inputNombre.click();
    await inputNombre.fill("Archivo que no sea imagen")
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('https://www.noesimagen.com');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Documents/certificado.pdf');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
})

Then("se muestra una alerta con el mensaje de que el archivo no es una imagen",async ({page}) => {
    const mensajeImagen = await page.getByText("Archivo no válido");
    await expect(mensajeImagen).toBeVisible();
    await page.close();
})

When("cree un patrocinador con enlace incorrecto",async ({page}) => {
    const inputNombre = await page.getByPlaceholder("Ingrese un nombre");
    await inputNombre.click();
    await inputNombre.fill("Archivo que no sea imagen")
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('enlacenovalido');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/cocacola.png');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
})

Then("el campo de enlace se pinta de rojo",async ({page}) => {
    const campoEnlace = await page.getByPlaceholder('https://www.ejemplo.com')
    await expect(campoEnlace).toHaveCSS('border-color', 'rgb(220, 53, 69)');
});