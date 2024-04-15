/** Generated from: features\Patrocinador\patrocinador.feature */
import { test } from "playwright-bdd";

test.describe("Crear Patrocinador", () => {

  test.beforeEach(async ({  }) => {
  });

  test("verificar que el nombre del patrocinador sea unico", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear patrocinador", null, { page });
    await When("cree un patrocinador con un nombre repetido", null, { page });
    await Then("se muestra una alerta con el mensaje de que el patrocinador ya existe", null, { page });
  });

  test("verificar que el nombre del patrocinador no sea nulo", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear patrocinador", null, { page });
    await When("cree un patrocinador sin nombre", null, { page });
    await Then("se muestra una mensaje de que el nombre de patrocinador no puede ser nulo", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\Patrocinador\\patrocinador.feature"),
});

const testMetaMap = {
  "verificar que el nombre del patrocinador sea unico": {"pickleLocation":"6:6"},
  "verificar que el nombre del patrocinador no sea nulo": {"pickleLocation":"11:6"},
};