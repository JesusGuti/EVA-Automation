// @ts-check
import { 
    Given,
    When,
    Then,
    After,
    AfterAll
} from '@cucumber/cucumber';
import { 
    test, 
    expect, 
    chromium,
    Page,
    Browser 
} from '@playwright/test';

let browser: Browser;
let page: Page;

Given("el usuario está en la vista de crear tipo de evento",async () => {
    browser = await chromium.launch({headless: false});
    page = await browser.newPage();
    await page.goto("http://localhost:8000");
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    const botonMenu = await page.getByRole('button', { name: 'TIPO DE EVENTO' })
    await botonMenu.click(); 
    const opcionCrearTipoEvento = await page.getByRole('link', { name: 'Crear tipo de evento' });
    await opcionCrearTipoEvento.click();
})

When("cree un evento con un nombre repetido",async () => {
    const inputNombre = await page.getByPlaceholder('Ingrese el nombre del tipo de evento');
    await inputNombre.click();
    await inputNombre.fill("Competencia");
    await page.waitForTimeout(2000);
    const botonEnviar = await page.getByRole('button', { name: 'Crear' });
    await botonEnviar.click();
})

Then("se muestra una alerta",async () => {
    const alert = await page.waitForSelector('.alert');
    const alertText = await alert.textContent();
    await expect(alertText).toContain("El tipo de evento ya existe");
    await page.waitForTimeout(1000);
})
