export class LoginPage {
  private usernameInput = '#username';
  private passwordInput = '#password';
  private submitButton = '#submit';
  private errorMessage = '#error';

  visit() {
    cy.visit('/practice-test-login/');
  }

  fillUsername(username: string) {
    cy.get(this.usernameInput).type(username);
  }

  fillPassword(password: string) {
    cy.get(this.passwordInput).type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  getErrorMessage() {
    return cy.get(this.errorMessage);
  }
}
