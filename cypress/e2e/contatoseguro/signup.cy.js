//Este arquivo contém o teste CRUD que será realizado para o cadastro de usuário

import Signup from '../../page/';

describe('Cadastro de usuário', () => {
  beforeEach(() => {
    //Antes de cada teste a página irá visitar a baseURL configurada no cypress.config.js
    cy.visit('/');
  });

  //Como primeiro teste, vamos identificar que o formulário de cadastro de usuário está acessível
  it('Acessar o formulário de cadastro', () => {
    Signup.goToSignupForm();
  });

  //Assim que verificado, o formulário de cadastro deverá ser preenchido. O método goToSignupForm faz com que o formulário seja aberto e o método addNewUser faz o preenchimento dos dados de cadastro
  it('Cadastrar um novo usuário', () => {
    Signup.goToSignupForm();
    Signup.addNewUser();
  });

  //Após concluir o cadastro, devemos confirmar que o usuário foi criado com sucesso verificando, através do método readNewUser que o nome cadastrado consta na lista de usuários
  it('Ler os dados do usuário criado', () => {
    Signup.readNewUser();
  });

  //O sistema deve permitir que ocorra a atualização do usuário criado. Para isso, utilizamos o método editUser que deve habilitar a edição cadastral.
  it('Editar os dados do usuário criado', () => {
    Signup.editUser();
  });

  //O método deleteUser, então, exclui o cadastro do usuário.
  it('Excluir os dados do usuário criado', () => {
    Signup.deleteUser();
  });

  //Após o processo de exclusão, foi adicionado o método checkDeletedUser. Este método garante que, após o processo de exclusão, os dados do usuário não estejam mais visíveis na lista.
  it.only('Verificar se os dados do usuário foram excluídos', () => {
    Signup.checkDeletedUser();
  });
});
