// Modify the function to use the Cypress prompt stub
function shortcut(s1, s2) {
  // Check if either of the input strings is empty
  if (s1 === "" || s2 === "") {
    return "";
  }

  // Extract the initial letters of the strings and convert them to uppercase
  const initialLetters = s1.charAt(0).toUpperCase() + s2.charAt(0).toUpperCase();

  return initialLetters;
}

// Use Cypress commands to handle prompts and alerts
cy.visit(baseUrl, {
  onBeforeLoad(win) {
    cy.stub(win, "prompt").onFirstCall().returns("Amnesty").onSecondCall().returns("International");
  },
}).then(() => {
  cy.on("window:alert", str => {
    expect(str).to.equal("AI");
  });
});

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
