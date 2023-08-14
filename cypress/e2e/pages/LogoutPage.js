export class LogoutPage{

    burgerMenubutton = '#react-burger-menu-btn';
    logoutButton = '#logout_sidebar_link';

    clickBurgerMenu(){
        cy.get(this.burgerMenubutton).click();
    }

    clickLogoutButton(){
        cy.get(this.logoutButton).click();
    }
    
}