/// <reference types="Cypress" />

describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("index.html"); // change URL to match your dev URL
  });

  it("successfully clicks", () => {
    for (let iter = 0; iter < 5; iter++) {
      cy.get(`#sideDiv${iter}`).click();
      //   cy.get("#main").should(
      //     "have.attr",
      //     "src",
      //     ($(`#sideImg${iter}`).prop("src")
      //   );

      cy.get("#main").then((el) => {
        let ele = el.prop("src");
        cy.get(`#sideImg${iter}`).should("have.attr", "src", ele);
      });

      //console.log(toMatch);
    }
  });

  //   it("successfully presses", () => {
  //     for (iter = 0; iter < 5; iter++) {
  //       cy.get(body).type("{ downarrow }");
  //     }
  //   });
});
