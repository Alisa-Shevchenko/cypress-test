import { StepperPage } from '../pages/stepperPage';

const stepperPage = new StepperPage();


export function checkStepperText() {
    const stepContent = {
        firstStep: 'Step content #1',
        secondStep: 'Step content #2',
        thirdStep: 'Step content #3',
        fourthStep: 'Step content #4'
    }
    for (const step in stepContent) {
        stepperPage.stepText().should('have.text', stepContent[step]);
        step != "fourthStep" ? stepperPage.nextButton().click() : "Finish"
    }
}