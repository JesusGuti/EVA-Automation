// @ts-check
import { 
    Given,
    When,
    Then,
} from '@cucumber/cucumber';
import {  
    expect, 
    chromium,
    Page,
    Browser 
} from '@playwright/test';

let browser: Browser;
let page: Page;

Given("el usuario está en la vista de crear patrocinador",async () => {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto("http://localhost:8000");
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'PATROCINADOR' })
    await botonMenu.click(); 
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear patrocinador' });
    await opcionCrearTipoEvento.click();
})

When("cree un patrocinador sin nombre",async () => {
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

Then("se muestra una mensaje de que el nombre de patrocinador no puede ser nulo",async () => {
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    await expect(mensajeFaltaNombre).toBeVisible();
    await page.close();
})