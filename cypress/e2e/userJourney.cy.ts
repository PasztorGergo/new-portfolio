import {} from "cypress";

beforeEach(() => {
  cy.visit("/");
});

describe("User journey", () => {
  it("goes to the about section", () => {
    cy.get("button")
      .contains(/learn more/i)
      .click();
    cy.get("h2").contains(/about/i).should("be.visible");
  });
  it("shows all skills", () => {
    cy.get("[data-test='skill-card']").should("have.length", 17);
  });
  it("navigates to the correct website linked to the project", () => {
    cy.get("[data-test='project-card']").each(($card) => {
      cy.wrap($card)
        .get("[data-test='project-card'] a")
        .click({ multiple: true, force: true });
      cy.visit("http://localhost:3000");
    });
  });
});
