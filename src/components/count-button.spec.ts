import { mount } from "@cypress/vue";
import CountButton from "./count-button.vue";

it("Passes initialCount prop correctly", () => {
  mount(CountButton, {
    props: {
      text: "my count",
    },
  });

  cy.get("button").should("contain.text", "my count");
});
