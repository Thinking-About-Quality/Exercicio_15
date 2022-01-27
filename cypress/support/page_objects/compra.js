class CompraPage {

    adicionarProdutoCarrinho(){
        var quantidade = 4
        cy.get('#primary-menu > .menu-item-629 > a').click()
        cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message > .button').click()
        cy.get('.checkout-button').click()
    }
    

}

export default new CompraPage()