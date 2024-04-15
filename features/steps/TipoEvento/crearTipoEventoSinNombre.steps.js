const { expect } = require("@playwright/test");
const { createBdd } = require("playwright-bdd");
const { Given, When, Then } = createBdd();

Given("el usuario está en la sección de crear tipo de evento",async ({page}) => {
    await page.goto("http://localhost:8000");
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'TIPO DE EVENTO' })
    await botonMenu.click(); 
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear tipo de evento' });
    await opcionCrearTipoEvento.click();
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