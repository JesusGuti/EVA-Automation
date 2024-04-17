import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
const { Given, When, Then } = createBdd();

Given("el usuario está en la vista de crear tipo de evento",async ({page}) => {
    await page.goto("http://localhost:8000");
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'TIPO DE EVENTO' })
    await botonMenu.click(); 
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear tipo de evento' });
    await opcionCrearTipoEvento.click();
})

When("cree un evento",async ({page}) => {
    const inputNombre = await page.getByPlaceholder('Ingrese el nombre del tipo de evento');
    await inputNombre.click();
    await inputNombre.fill("Prueba Automatizada");
    await page.waitForTimeout(2000);
    const inputDescripcion = await page.getByPlaceholder('Ingrese una descripción...');
    await inputDescripcion.fill("Esta es una prueba de automatización");
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
    await page.goto("http://localhost:8000/admin/tipos-de-evento");
})

Then("se muestra el tipo de evento en la tabla",async ({page}) => {
    const cell = await page.getByText("Prueba Automatizada")
    await expect(cell).toBeVisible     ();
})


When("cree un evento con un nombre repetido",async ({page}) => {
    const inputNombre = await page.getByPlaceholder('Ingrese el nombre del tipo de evento');
    await inputNombre.click();
    await inputNombre.fill("Competencia");
    await page.waitForTimeout(2000);
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
})

Then("se muestra una alerta con el mensaje el tipo de evento ya existe",async ({page}) => {
    const alert = await page.waitForSelector('.alert');
    const alertText = await alert.textContent();
    await expect(alertText).toContain("El tipo de evento ya existe");
    await page.waitForTimeout(1000);
    await page.close()
})

When("cree un evento sin nombre",async ({page}) => {
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
})

Then("se muestra un mensaje de error",async ({page}) => {
    await page.waitForTimeout(2000);
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    await expect(mensajeFaltaNombre).toBeVisible();
    await page.waitForTimeout(2000);
    await page.close();
})

When("se inserta un nombre de tipo de evento de más de 50 caracteres",async ({page}) => {
    const inputNombre = await page.getByPlaceholder('Ingrese el nombre del tipo de evento');
    await inputNombre.click();
    const nombreLargo = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m";
    await inputNombre.fill(nombreLargo);
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
})

Then("se limita a 50 caracteres",async ({page}) => {
    const valorInput = await inputNombre.inputValue();
    expect(valorInput.length).toBeLessThanOrEqual(50);
    await page.waitForTimeout(2000);
})