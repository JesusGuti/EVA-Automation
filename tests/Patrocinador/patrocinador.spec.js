// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('');
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'PATROCINADOR' })
    await botonMenu.click(); 
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear patrocinador' });
    await opcionCrearTipoEvento.click();
});

test("Verificar que el nombre de patrocinador no sea nulo", async ({ page }) => {
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('https://www.coca-cola.com');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/cocacola.png');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
    await page.waitForTimeout(2000)
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    await expect(mensajeFaltaNombre).toBeVisible();
});

test("Verificar que el nombre de patrocinador sea único", async ({ page }) => {
    const inputNombre = await page.getByPlaceholder('Ingrese un nombre')
    await inputNombre.click();
    await inputNombre.fill('Coca Cola');
    const inputLink = await page.getByPlaceholder('https://www.ejemplo.com')
    await inputLink.click();
    await inputLink.fill('https://www.coca-cola.com');
    await page.waitForTimeout(1000);
    const inputImage = await page.locator('#imageUpload')
    await inputImage.setInputFiles('C:/Users/USUARIO/Pictures/cocacola.png');
    await page.waitForTimeout(1000)
    const botonCrear = await page.getByRole('button', { name: 'Crear' })
    await botonCrear.click();
    await page.waitForTimeout(2000)
    const alert = await page.waitForSelector('.alert');
    const alertText = await alert.textContent();
    await expect(alertText).toContain("El patrocinador ya existe");
});
