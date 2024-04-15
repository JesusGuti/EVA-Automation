/** Generated from: features\TipoEvento\crearTipoEvento.feature */
import { test } from "playwright-bdd";

test.describe("Crear Tipo de Evento", () => {

  test.beforeEach(async ({  }) => {
  });

  test("verificar que el nombre de la playlist sea unico", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear tipo de evento", null, { page });
    await When("cree un evento con un nombre repetido", null, { page });
    await Then("se muestra una alerta", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\TipoEvento\\crearTipoEvento.feature"),
});

const testMetaMap = {
  "verificar que el nombre de la playlist sea unico": {"pickleLocation":"5:6"},
};