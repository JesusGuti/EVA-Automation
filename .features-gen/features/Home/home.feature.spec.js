/** Generated from: features\Home\home.feature */
import { test } from "playwright-bdd";

test.describe("Home", () => {

  test.beforeEach(async ({  }) => {
  });

  test("Verificar que los eventos se filtran de mas antiguo a reciente", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista principal", null, { page });
    await When("filtre por antiguo a reciente", null, { page });
    await Then("se muestran los eventos ordenados de antiguo a reciente", null, { page });
  });

  test("Verificar que los eventos se filtran de mas reciente a antiguo", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista principal", null, { page });
    await When("filtre por reciente a antiguo", null, { page });
    await Then("se muestran los eventos ordenados de reciente a antiguo", null, { page });
  });

  test("Verificar que los eventos se filtran de a-z", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista principal", null, { page });
    await When("filtre por a-z", null, { page });
    await Then("se muestran los eventos ordenados de la a hasta la z", null, { page });
  });

  test("Verificar que los eventos se filtran de z-a", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista principal", null, { page });
    await When("filtre por z-a", null, { page });
    await Then("se muestran los eventos ordenados de la z hasta la a", null, { page });
  });

  test("Verificar que los eventos se filtran en curso", async ({ Given, page, When, Then }) => {
    await Given("el usuario está en la vista principal", null, { page });
    await When("filtre por eventos en curso", null, { page });
    await Then("se muestran solo eventos en curso", null, { page });
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $testMetaMap: ({}, use) => use(testMetaMap),
  $uri: ({}, use) => use("features\\Home\\home.feature"),
});

const testMetaMap = {
  "Verificar que los eventos se filtran de mas antiguo a reciente": {"pickleLocation":"6:5"},
  "Verificar que los eventos se filtran de mas reciente a antiguo": {"pickleLocation":"11:5"},
  "Verificar que los eventos se filtran de a-z": {"pickleLocation":"16:5"},
  "Verificar que los eventos se filtran de z-a": {"pickleLocation":"21:5"},
  "Verificar que los eventos se filtran en curso": {"pickleLocation":"26:5"},
};