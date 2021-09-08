/// <reference types="cypress" />
var faker = require('faker');
import compra from '../support/page_objects/compra'
const login = require('../fixtures/perfil.json')
context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    beforeEach(() => {
        cy.visit('/')
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {
        let nomeFaker = (faker.name.firstName())
        let sobrenomeFaker = (faker.name.lastName())
        let emailfaker = (faker.internet.email(nomeFaker))

        compra.adicionarProdutoCarrinho()
        
        cy.get('.showlogin').click()
        cy.get('#username').type(login.usuario)
        cy.get('#password').type(login.senha)
        cy.get('.woocommerce-button').click()
        
        cy.get('#billing_first_name').clear().type(nomeFaker)
        cy.get('#billing_last_name').clear().type(sobrenomeFaker)
        cy.get('#billing_phone').clear().type('11998989898')
        cy.get('#billing_email').clear().type(emailfaker)
        cy.get('#payment_method_cod').click()
        cy.get('#terms').check()
        cy.get('#place_order').click()
        cy.get('.woocommerce-notice').should('contain','Obrigado. Seu pedido foi recebido.')

    });

})