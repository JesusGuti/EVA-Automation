import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
const { Given, When, Then } = createBdd();

Given("el usuario está en la vista de crear actividad",async ({page}) => {
    await page.goto("http://localhost:8000");
    /** Aqui hacemos click en el menu lateral, para entrar en el menu **/
    await page.getByRole('button', { name: 'ACTIVIDAD' }).click();
    await page.getByRole('link', { name: 'Crear actividad' }).click();
    await page.getByRole('button', { name: '' }).click();
})

When("cree una actividad sin nombre",async ({page}) => {
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-16T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
})

Then("se muestra un mensaje con el nombre no puede estar vacio",async ({page}) => {
    await expect(page.getByText("El nombre no puede estar vacío.")).toBeVisible();
    await page.waitForTimeout(2500);
})

When("cree una actividad",async ({page}) => {
    const nombreEvento = "Evento de prueba";
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria1");
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-16T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await page.waitForTimeout(500);
    await page.goto('http://127.0.0.1:8000/eventos/' + nombreEvento);
})

Then("se muestra el evento",async ({page}) => {
    await expect(page.getByText("Clasificatoria1")).toBeVisible();
    await page.waitForTimeout(2500);
})

When("cree una actividad con nombre ya existente",async ({page}) => {
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria1");
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-16T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await page.waitForTimeout(1000);
})

Then("se muestra una alerta",async ({page}) => {
    const feedMsg = await page.locator("#mensajeNombre").innerText().then((texto) => { return texto });
    await expect(feedMsg).toBe("La actividad ya existe");
    await page.waitForTimeout(2500);
})

When("ponga una fecha menor a inicio evento",async ({page}) => {
    const nombreEvento = "Evento de prueba";
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria 2");
    await page.locator("#fechaInicio").fill('2024-04-13T08:00');
    await expect(page.locator("#fechaFin")).toBeDisabled();
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
})

Then("se muestra rango de fechas no valido",async ({page}) => {
    await expect(page.getByText("Rango de fechas no válido")).toBeVisible();
    await page.waitForTimeout(2500);
})

When("ponga una fecha menor a la actual",async ({page}) => {
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria 2");
    await page.locator("#fechaInicio").fill('2024-04-14T10:00');
    await expect(page.locator("#fechaFin")).toBeDisabled();
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
})

When("ponga fecha mayor a fin evento",async ({page}) => {
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Semifinal");
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-21T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
})
