import {} from "cypress";

it("test for the portfolio page", () => {
  cy.visit("/");

  cy.get("button").should("be.visible");
});
