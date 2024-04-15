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

When("cree un evento sin nombre",async () => {
    await page.waitForTimeout(5000);
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
})

Then("se muestra un mensaje de error",async () => {
    await page.waitForTimeout(2000);
    const mensajeFaltaNombre = await page.getByText("El nombre no puede estar vacío.");
    await expect(mensajeFaltaNombre).toBeVisible();
    await page.waitForTimeout(2000);
    await page.close();
})