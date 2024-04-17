import { createBdd } from "playwright-bdd";
import { expect } from "@playwright/test";
const { Given, When, Then } = createBdd();

Given("el usuario está en la vista principal", async ({ page }) => {
    await page.goto("http://localhost:8000");
    await page.waitForLoadState();
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);
});

When("filtre por antiguo a reciente", async ({ page }) => {
    // Esperar a que todas las tarjetas estén presentes
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    await page.waitForTimeout(2000)
    // Seleccionar la opción "Antiguo a Reciente"
    await page.getByLabel('Ordenar por').selectOption('4');
});

Then("se muestran los eventos ordenados de antiguo a reciente", async ({ page }) => {
    await page.waitForTimeout(2000)
    // Obtener los títulos de las tarjetas
    // Esperar a que se carguen todas las tarjetas de eventos después de ordenar
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    const fechas = await page.$$eval('.tarjeta #fechaInicioEvento', fechas => {
        return fechas.map(fecha => new Date(fecha.textContent));
    });

    // Verificar que las fechas estén ordenados  
    let ordenFecha = true;
    for (let i = 1; i < fechas.length; i++) {
        if (fechas[i] > fechas[i - 1]) {
            ordenFecha = false;
            break;
        }
    }
    console.log(fechas)
    // Verificar que se hayan cargado las tarjetas de eventos y que los títulos estén ordenados
    await expect(ordenFecha).toBeTruthy();
});

When("filtre por reciente a antiguo", async ({ page }) => {
    // Esperar a que todas las tarjetas estén presentes
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    await page.waitForTimeout(2000)
    // Seleccionar la opción "Antiguo a Reciente"
    await page.getByLabel('Ordenar por').selectOption('3');
});

Then("se muestran los eventos ordenados de reciente a antiguo", async ({ page }) => {
    await page.waitForTimeout(2000)
    // Obtener los títulos de las tarjetas
    // Esperar a que se carguen todas las tarjetas de eventos después de ordenar
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    const fechas = await page.$$eval('.tarjeta #fechaInicioEvento', fechas => {
        return fechas.map(fecha => new Date(fecha.textContent));
    });

    // Verificar que las fechas estén ordenados  
    let ordenFecha = true;
    for (let i = 1; i < fechas.length; i++) {
        if (fechas[i] < fechas[i - 1]) {
            ordenFecha = false;
            break;
        }
    }

    console.log(fechas)
    // Verificar que se hayan cargado las tarjetas de eventos y que los títulos estén ordenados
    await expect(ordenFecha).toBeTruthy();
});

When("filtre por a-z", async ({ page }) => {
    // Esperar a que todas las tarjetas estén presentes
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    await page.waitForTimeout(2000)
    // Seleccionar la opción "A-Z"
    await page.getByLabel('Ordenar por').selectOption('1');
});

Then("se muestran los eventos ordenados de la a hasta la z", async ({ page }) => {
    await page.waitForTimeout(2000)
    // Obtener los títulos de las tarjetas
    // Esperar a que se carguen todas las tarjetas de eventos después de ordenar
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    const titulos = await page.$$eval('.tarjeta #nombreEvento', titulos => {
        return titulos.map(titulo => titulo.textContent.trim());
    });

    // Verificar que los títulos estén ordenados alfabéticamente
    let ordenAlfabetico = true;
    for (let i = 1; i < titulos.length; i++) {
        if (titulos[i] < titulos[i - 1]) {
            ordenAlfabetico = false;
            break;
        }
    }

    // Verificar que se hayan cargado las tarjetas de eventos y que los títulos estén ordenados
    await expect(ordenAlfabetico).toBeTruthy();
});

When("filtre por z-a", async ({ page }) => {
    // Esperar a que todas las tarjetas estén presentes
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    await page.waitForTimeout(2000)
    // Seleccionar la opción "Z-A"
    await page.getByLabel('Ordenar por').selectOption('2');
});

Then("se muestran los eventos ordenados de la z hasta la a", async ({ page }) => {
    await page.waitForTimeout(2000)
    // Obtener los títulos de las tarjetas
    // Esperar a que se carguen todas las tarjetas de eventos después de ordenar
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    const titulos = await page.$$eval('.tarjeta #nombreEvento', titulos => {
        return titulos.map(titulo => titulo.textContent.trim());
    });

    // Verificar que los títulos estén ordenados  
    let ordenAlfabetico = true;
    for (let i = 1; i < titulos.length; i++) {
        if (titulos[i] > titulos[i - 1]) {
            ordenAlfabetico = false;
            break;
        }
    }
    console.log(titulos)
    // Verificar que se hayan cargado las tarjetas de eventos y que los títulos estén ordenados
    await expect(ordenAlfabetico).toBeTruthy();
});


When("filtre por eventos en curso", async ({ page }) => {
    // Esperar a que todas las tarjetas estén presentes
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    await page.waitForTimeout(2000)
    // Seleccionar la opción "Antiguo a Reciente"
    await page.getByLabel('Ver').selectOption('2');
});

Then("se muestran solo eventos en curso", async ({ page }) => {
    await page.waitForTimeout(2000)
    // Obtener los títulos de las tarjetas
    // Esperar a que se carguen todas las tarjetas de eventos después de ordenar
    await page.waitForFunction(() => document.querySelectorAll('.tarjeta').length > 0);

    const fechas = await page.$$eval('.tarjeta #fechaInicioEvento', fechas => {
        return fechas.map(fecha => new Date(fecha.textContent));
    });

    const fechaActual = new Date()
    console.log(fechaActual)
    // Verificar que las fechas estén ordenados  
    let ordenFecha = true;
    for (let i = 1; i < fechas.length; i++) {
        if (fechas[i] >= fechaActual) {
            ordenFecha = false;
            break;
        }
    }
    console.log(fechas)
    // Verificar que se hayan cargado las tarjetas de eventos y que los títulos estén ordenados
    await expect(ordenFecha).toBeTruthy();
});