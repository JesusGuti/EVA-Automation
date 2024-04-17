/** Generated from: features\Patrocinador\patrocinador.feature */
import { test } from "playwright-bdd";

test.describe("Crear Patrocinador", () => {

  test.beforeEach(async ({  }) => {
  });

  test("verificar que el patrocinador se cree", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear patrocinador", null, { page });
    await When("cree un patrocinador con datos validos", null, { page });
    await Then("se muestra el patrocinador en la tabla", null, { page });
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

  test("verificar que el peso de la imagen no sea mayor a 2mb", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear patrocinador", null, { page });
    await When("cree un patrocinador con una imagen que pese mas de 2mb", null, { page });
    await Then("se muestra una alerta con el mensaje de que la imagen es muy grande", null, { page });
  });

  test("verificar que el archivo dada sea una imagen", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear patrocinador", null, { page });
    await When("cree un patrocinador con un archivo que no sea una imagen", null, { page });
    await Then("se muestra una alerta con el mensaje de que el archivo no es una imagen", null, { page });
  });

  test("verificar que el enlace del patrocinador no sea nulo", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista de crear patrocinador", null, { page });
    await When("cree un patrocinador con enlace incorrecto", null, { page });
    await Then("el campo de enlace se pinta de rojo", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\Patrocinador\\patrocinador.feature"),
});

const testMetaMap = {
  "verificar que el patrocinador se cree": {"pickleLocation":"6:7"},
  "verificar que el nombre del patrocinador sea unico": {"pickleLocation":"11:6"},
  "verificar que el nombre del patrocinador no sea nulo": {"pickleLocation":"16:6"},
  "verificar que el peso de la imagen no sea mayor a 2mb": {"pickleLocation":"21:6"},
  "verificar que el archivo dada sea una imagen": {"pickleLocation":"26:6"},
  "verificar que el enlace del patrocinador no sea nulo": {"pickleLocation":"31:6"},
};