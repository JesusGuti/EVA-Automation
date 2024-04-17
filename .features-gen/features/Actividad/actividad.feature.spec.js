/** Generated from: features\Actividad\actividad.feature */
import { test } from "playwright-bdd";

test.describe("Crear Actividad", () => {

  test.beforeEach(async ({  }) => {
  });

  test("verificar que el nombre de la actividad no sea nulo", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear actividad", null, { page });
    await When("cree una actividad sin nombre", null, { page });
    await Then("se muestra un mensaje con el nombre no puede estar vacio", null, { page });
  });

  test("verificar que al crear una actividad se muestre el evento", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear actividad", null, { page });
    await When("cree una actividad", null, { page });
    await Then("se muestra el evento", null, { page });
  });

  test("verificar que el nombre de la actividad sea unico", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear actividad", null, { page });
    await When("cree una actividad con nombre ya existente", null, { page });
    await Then("se muestra una alerta", null, { page });
  });

  test("verificar que la fecha de inicio de la actividad no sea menor a fecha de inicio de la actividad", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear actividad", null, { page });
    await When("ponga una fecha menor a inicio evento", null, { page });
    await Then("se muestra rango de fechas no valido", null, { page });
  });

  test("verificar que la fecha de inicio de la actividad no sea menor a fecha actual si el evento inicio", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear actividad", null, { page });
    await When("ponga una fecha menor a la actual", null, { page });
    await Then("se muestra rango de fechas no valido", null, { page });
  });

  test("verificar que la fecha de fin de la actividad no sea mayor a fecha de fin del evento", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear actividad", null, { page });
    await When("ponga fecha mayor a fin evento", null, { page });
    await Then("se muestra rango de fechas no valido", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\Actividad\\actividad.feature"),
});

const testMetaMap = {
  "verificar que el nombre de la actividad no sea nulo": {"pickleLocation":"6:6"},
  "verificar que al crear una actividad se muestre el evento": {"pickleLocation":"11:6"},
  "verificar que el nombre de la actividad sea unico": {"pickleLocation":"16:6"},
  "verificar que la fecha de inicio de la actividad no sea menor a fecha de inicio de la actividad": {"pickleLocation":"21:6"},
  "verificar que la fecha de inicio de la actividad no sea menor a fecha actual si el evento inicio": {"pickleLocation":"26:6"},
  "verificar que la fecha de fin de la actividad no sea mayor a fecha de fin del evento": {"pickleLocation":"31:6"},
};