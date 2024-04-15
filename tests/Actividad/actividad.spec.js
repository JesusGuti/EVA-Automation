// @ts-check
import { test, expect } from '@playwright/test';

// Datos del evento en el que se realizaran las pruebas
// Evento: Evento de prueba
// Fecha Inicio: 14-04-2024 08:00  Fecha Fin: 20-04-2024 08:00

test.beforeEach(async ({ page }) => {
    await page.goto('http://127.0.0.1:8000/');
    await page.getByRole('button', { name: 'ACTIVIDAD' }).click();
    await page.getByRole('link', { name: 'Crear actividad' }).click();
    await page.getByRole('button', { name: '' }).click();
});

test("testCrearActividadSinNombre", async ({ page }) => {
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-16T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await expect(page.getByText("El nombre no puede estar vacío.")).toBeVisible();
    await page.waitForTimeout(2500);
});

test("testCrearActividad", async ({ page }) => {
    const nombreEvento = "Evento de prueba";
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria1");
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-16T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await page.waitForTimeout(500);
    await page.goto('http://127.0.0.1:8000/eventos/' + nombreEvento);
    await expect(page.getByText("Clasificatoria1")).toBeVisible();
    await page.waitForTimeout(2500);
});

test("testCrearActividadConNombreExistente", async ({ page }) => {
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria1");
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-16T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await page.waitForTimeout(1000);
    const feedMsg = await page.locator("#mensajeNombre").innerText().then((texto) => { return texto });
    await expect(feedMsg).toBe("La actividad ya existe");
    await page.waitForTimeout(2500);
});

test("testInicioActividadMenorInicioEvento", async ({ page }) => {
    const nombreEvento = "Evento de prueba";
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria 2");
    await page.locator("#fechaInicio").fill('2024-04-13T08:00');
    await expect(page.locator("#fechaFin")).toBeDisabled();
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await expect(page.getByText("Rango de fechas no válido")).toBeVisible();
    await page.waitForTimeout(2500);
});

test("testInicioActividadMenorFechaActual", async ({ page }) => {
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Clasificatoria 2");
    await page.locator("#fechaInicio").fill('2024-04-14T10:00');
    await expect(page.locator("#fechaFin")).toBeDisabled();
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await expect(page.getByText("Rango de fechas no válido")).toBeVisible();
    await page.waitForTimeout(2500);
});

test("testFinActividadMayorFinEvento", async ({ page }) => {
    await page.getByPlaceholder('Ingrese el nombre de la actividad').fill("Semifinal");
    await page.locator("#fechaInicio").fill('2024-04-15T08:00');
    await page.locator("#fechaFin").fill('2024-04-21T08:00');
    await page.getByRole('button', { name: 'Crear' }).click();
    await page.getByRole('button', { name: 'Sí' }).click();
    await expect(page.getByText("Rango de fechas no válido")).toBeVisible();
    await page.waitForTimeout(2500);
});