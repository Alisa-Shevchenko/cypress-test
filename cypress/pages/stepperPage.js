export class StepperPage {

    stepText() {
        return cy.get('.horizontal > .step-content > h3.ng-star-inserted')
    }

    nextButton() {
        return cy.get('.appearance-filled:contains("next"):eq("0")')
    }
}