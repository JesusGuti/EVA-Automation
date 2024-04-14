// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('');
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'TIPO DE EVENTO' })
    await botonMenu.click(); 
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear tipo de evento' });
    await opcionCrearTipoEvento.click();
});

test("Verificar que el nombre de tipo de evento sea una cadena de caracteres", async ({ page }) => {
    const inputNombre = await page.getByPlaceholder('Ingrese el nombre del tipo de evento');
    await inputNombre.click();
    await inputNombre.fill("Competencia");
    const inputDescripcion =  await page.getByPlaceholder('Ingrese una descripción...');
    const descripcion = "Una descripcion"
    await inputDescripcion.fill(descripcion);
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
    await page.waitForTimeout(5000);
});

test("Verificar que el nombre de tipo de evento no sea nulo", async ({ page }) => {
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    await expect(mensajeFaltaNombre).toBeVisible();
    await page.waitForTimeout(5000);
});

test("Verificar que el nombre de tipo de evento sea único", async ({ page }) => {
    const inputNombre = await page.getByPlaceholder('Ingrese el nombre del tipo de evento');
    await inputNombre.click();
    await inputNombre.fill("Competencia");
    await page.waitForTimeout(2000);
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
    const alert = await page.waitForSelector('.alert');
    const alertText = await alert.textContent();
    await expect(alertText).toContain("El tipo de evento ya existe");
    await page.waitForTimeout(1000);
});