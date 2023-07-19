import {} from "cypress";

it("test for the portfolio page", () => {
  cy.visit("/");

  cy.get("button")
    .contains(/learn more/i)
    .should("be.visible");
  cy.get("button")
    .contains(/learn more/i)
    .click()
    .get("h2")
    .contains(/about/i)
    .should("be.visible");
  cy.get("a")
    .contains(/pract-o-music.vercel.app/i)
    .click({ force: true })
    .url();
});
