export function navigateTo(urlName) {
    cy.visit(`${urlName}`);
}

export function verifyThatUserHasBeenNavigatedTo(endpoint) {
    cy.url().should("include", endpoint);
}
