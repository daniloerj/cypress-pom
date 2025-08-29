import { LoginPage } from '../../src/pages/LoginPage';

describe('Login Page Automation Scenarios', () => {
  const loginPage = new LoginPage();

  beforeEach(() => {
    loginPage.visit();
  });

  it('should login successfully with valid credentials', () => {
    loginPage.fillUsername('student');
    loginPage.fillPassword('Password123');
    loginPage.submit();
    cy.url().should('include', '/logged-in-successfully/');
    cy.contains('Congratulations').should('be.visible');
  });

  it('should show error for invalid username', () => {
    loginPage.fillUsername('invalidUser');
    loginPage.fillPassword('Password123');
    loginPage.submit();
    loginPage.getErrorMessage().should('contain', 'Your username is invalid!');
  });

  it('should show error for invalid password', () => {
    loginPage.fillUsername('student');
    loginPage.fillPassword('invalidPass');
    loginPage.submit();
    loginPage.getErrorMessage().should('contain', 'Your password is invalid!');
  });

  it('should show error for empty username', () => {
    loginPage.fillPassword('Password123');
    loginPage.submit();
    loginPage.getErrorMessage().should('contain', 'Your username is invalid!');
  });

  it('should show error for empty password', () => {
    loginPage.fillUsername('student');
    loginPage.submit();
    loginPage.getErrorMessage().should('contain', 'Your password is invalid!');
  });
});
