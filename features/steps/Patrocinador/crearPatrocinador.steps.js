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
