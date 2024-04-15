// const { createBdd } = require("playwright-bdd");
// const { expect } = require("@playwright/test");
// const { Given, When, Then } = createBdd();

// When("cree un patrocinador con un nombre repetido",async ({page}) => {
//     const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
//     await inputLink.click();
//     await inputLink.fill('https://www.coca-cola.com');
//     await page.waitForTimeout(1000);
//     const inputImage = await page.locator('#imageUpload')
//     await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/cocacola.png');
//     await page.waitForTimeout(1000)
//     const botonCrear = await page.getByRole('button', { name: 'Crear' })
//     await botonCrear.click();
// })

// Then("se muestra una alerta con el mensaje de que el patrocinador ya existe",async ({page}) => {
//     const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
//     await expect(mensajeFaltaNombre).toBeVisible();
//     await page.close();
// })