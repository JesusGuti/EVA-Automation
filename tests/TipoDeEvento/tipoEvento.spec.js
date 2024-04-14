// @ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('http://infinitycode.tis.cs.umss.edu.bo');
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'TIPO DE EVENTO' })
    await botonMenu.click(); 
});

test("test1", async ({ page }) => {
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear tipo de evento' });
    await opcionCrearTipoEvento.click();
    const inputNombre = await page.getByPlaceholder('Ingrese el nombre del tipo de evento');
    await inputNombre.click();
    await inputNombre.fill("Dorian lagarto");
    const inputDescripcion =  await page.getByPlaceholder('Ingrese una descripción...');
    await inputDescripcion.fill("Nueva descripcion")
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
    await page.waitForTimeout(10000)
});

test("test2", async ({ page }) => {
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear tipo de evento' });
    await opcionCrearTipoEvento.click();
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
    await page.waitForTimeout(5000);
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    expect(mensajeFaltaNombre).toBeDefined();
});