/** Generated from: features\TipoEvento\crearTipoEvento.feature */
import { test } from "playwright-bdd";

test.describe("Crear Tipo de Evento", () => {

  test.beforeEach(async ({  }) => {
  });

  test("verificar que al crear un tipo de evento se muestre en la tabla", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear tipo de evento", null, { page });
    await When("cree un evento", null, { page });
    await Then("se muestra el tipo de evento en la tabla", null, { page });
  });

  test("verificar que el nombre de tipo de evento sea unico", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear tipo de evento", null, { page });
    await When("cree un evento con un nombre repetido", null, { page });
    await Then("se muestra una alerta con el mensaje el tipo de evento ya existe", null, { page });
  });

  test("verificar que el nombre de tipo de evento no sea nulo", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear tipo de evento", null, { page });
    await When("cree un evento sin nombre", null, { page });
    await Then("se muestra un mensaje de error", null, { page });
  });

  test("verificar que el nombre de tipo de evento no sea mayor a 50 caracteres", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear tipo de evento", null, { page });
    await When("se inserta un nombre de tipo de evento de más de 50 caracteres", null, { page });
    await Then("se limita a 50 caracteres", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\TipoEvento\\crearTipoEvento.feature"),
});

const testMetaMap = {
  "verificar que al crear un tipo de evento se muestre en la tabla": {"pickleLocation":"5:6"},
  "verificar que el nombre de tipo de evento sea unico": {"pickleLocation":"10:6"},
  "verificar que el nombre de tipo de evento no sea nulo": {"pickleLocation":"15:6"},
  "verificar que el nombre de tipo de evento no sea mayor a 50 caracteres": {"pickleLocation":"20:6"},
};