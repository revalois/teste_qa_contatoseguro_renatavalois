const elements = require('./elements').HOME_ELEMENTS;
const formElements = require('./elements').FORM_ELEMENTS;

class SignUp {
  goToSignupForm() {
    cy.get(elements.addNewUser).click();
  }

  addNewUser() {
    cy.get(formElements.name).type('João de Barros');
    cy.get(formElements.email).type('joaobarros@mail.com');
    cy.get(formElements.phone).type('11 99999-8888');
    cy.get(formElements.birthCity).type('São Tomé');
    cy.get(formElements.birthDate).type('2000-01-01');
    cy.get(formElements.companySearch).type('Empresa');
    cy.get(formElements.company).click();
    cy.get(formElements.modalClick).click();
    cy.get(formElements.saveButton).click();
  }

  readNewUser() {
    cy.get(elements.userAdded).contains('João de Barros');
  }

  editUser() {
    cy.get(elements.userAdded)
      .contains('João de Barros')
      .parent('tr')
      .find(':nth-child(1) >img')
      .click();
  }

  deleteUser() {
    cy.get(elements.userAdded)
      .contains('João de Barros')
      .parent('tr')
      .find(':nth-child(2) >img')
      .click();
    cy.get(elements.deleteModal).contains('Usuário deletado com sucesso!');
  }

  checkDeletedUser() {
    cy.get(elements.userAdded)
      .contains('João de Barros')
      .should('not.be.visible');
  }
}
export default new SignUp();
