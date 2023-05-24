/// <reference types="cypress" />

context("funcionalidade login", () => {
  it("Deve fazer login com sucesso", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("aluno_ebac@teste.com");
    cy.get("#password").type("teste@teste.com");
    cy.get(".woocommerce-form > .button").click();
  });

  it("Deve exibir uma mensagem de erro ao inserir usuário ou senha inválidos", () => {
    cy.visit("http://lojaebac.ebaconline.art.br/minha-conta/");
    cy.get("#username").type("al_ebac@teste.com");
    cy.get("#password").type("teste@");
    cy.get(".woocommerce-form > .button").click();
  });
});
