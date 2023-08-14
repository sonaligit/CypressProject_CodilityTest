export class ProductsPage{

     addTocartButtonBackPack = '#add-to-cart-sauce-labs-backpack';
     itemSauceBackPack = '#item_4_title_link';
     itemSauceLabBackLight = '#item_0_title_link';
    addToCartButtonBikeLight= '#add-to-cart-sauce-labs-bike-light';
    shoppingCartContainer = '#shopping_cart_container'

     clickAddToCartButtonBackPack(){
        cy.get(this.addTocartButtonBackPack).click();
     }

     clickSauceBackPackItem(){
        cy.get(this.itemSauceBackPack).click();
     }

     clickSauceLabBackLightItem(){
        cy.get(this.itemSauceLabBackLight).click();
     }

     clickAddToCartButtonBikeLight(){
        cy.get(this.addToCartButtonBikeLight).click();
     }

     clickShoppingCartContainer(){
        cy.get(this.shoppingCartContainer).click();
     }
     ValidateBackPackText(){
        cy.contains('Sauce Labs Backpack').should('have.text','Sauce Labs Backpack');
     }

     ValidateBikeLightText(){
        cy.contains('Sauce Labs Bike Light').should('have.text','Sauce Labs Bike Light');
     }

     validateRemoveButtonPresentForBackPack(){
        cy.get('#remove-sauce-labs-backpack').should('be.enabled')
     }
     
     


}