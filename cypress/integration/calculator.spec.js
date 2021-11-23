it("should check that 7+2 equals 9", () => {
  cy.visit("http://127.0.0.1:5500/calculator/");

  cy.get(".seven").click();
  cy.get(".add").click();
  cy.get(".two").click();
  cy.get(".equal").click();

  cy.get(".result__output").should("contain", "9");
});

it("should check that 4*16 equals 64", () => {
  cy.visit("http://127.0.0.1:5500/calculator/");

  cy.get(".four").click();
  cy.get(".multiply").click();
  cy.get(".one").click();
  cy.get(".six").click();
  cy.get(".equal").click();

  cy.get(".result__output").should("contain", "64");
});

it("should check that 75/3+100 equals 125", () => {
  cy.visit("http://127.0.0.1:5500/calculator/");

  cy.get(".seven").click();
  cy.get(".five").click();
  cy.get(".divide").click();
  cy.get(".three").click();
  cy.get(".add").click();
  cy.get(".one").click();
  cy.get(".zero").click();
  cy.get(".zero").click();
  cy.get(".equal").click();

  cy.get(".result__output").should("contain", "125");
});

it("should check that 7/0 equals infinity", () => {
  cy.visit("http://127.0.0.1:5500/calculator/");

  cy.get(".seven").click();
  cy.get(".divide").click();
  cy.get(".zero").click();
  cy.get(".equal").click();
  cy.get(".result__output").should("contain", "∞");
});

it("should check that 60 DEL equals 6", () => {
  cy.visit("http://127.0.0.1:5500/calculator/");

  cy.get(".six").click();
  cy.get(".zero").click();
  cy.get(".delete").click();
  cy.get(".equal").click();
  cy.get(".result__output").should("contain", "6");
});
it("should check that 35600C equals empty field", () => {
  cy.visit("http://127.0.0.1:5500/calculator/");

  cy.get(".three").click();
  cy.get(".five").click();
  cy.get(".six").click();
  cy.get(".zero").click();
  cy.get(".zero").click();
  cy.get(".clear").click();
  cy.get(".result__output").should("contain", "");
});
