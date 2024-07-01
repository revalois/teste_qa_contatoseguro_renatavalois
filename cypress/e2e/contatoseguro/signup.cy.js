import Signup from '../../page/';

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Acessar o formulário de cadastro', () => {
    Signup.goToSignupForm();
  });

  it('Cadastrar um novo usuário', () => {
    Signup.goToSignupForm();
    Signup.addNewUser();
  });

  it('Ler os dados do usuário criado', () => {
    Signup.readNewUser();
  });

  it('Editar os dados do usuário criado', () => {
    Signup.editUser();
  });

  it('Excluir os dados do usuário criado', () => {
    Signup.deleteUser();
  });

  it('Verificar se os dados do usuário foram excluídos', () => {
    Signup.checkDeletedUser();
  });
});
