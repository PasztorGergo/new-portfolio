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
  it.only("navigates to the correct blog post", () => {
    cy.request("POST", "https://api.hashnode.com", {
      query: `
        {
          user(username: "G3rgoPasztor") {
            publication {
              posts(page: 0) {
               slug
               title
               brief
               coverImage
              }
            }
          }
        }`,
    }).then((res) => {
      const { data } = res.body;

      data.user.publication.posts.forEach(
        (post: {
          slug: string;
          coverImage: string;
          title: string;
          brief: string;
        }) => {
          cy.get(`[data-test='${post.slug}']`).click();
          cy.location("pathname").should("eq", post.slug);
        }
      );
    });
  });
});
