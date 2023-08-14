export class LoginPage{

    loginPage_userName_textbox = '#user-name';
    loginPage_password_textbox = '#password';

    enterUserName(userName){
        cy.get(this.loginPage_userName_textbox).type(userName);
    }

    enterPassword(password){
        cy.get(this.loginPage_password_textbox).type(password);
    }

    clickLoginButton(){
        cy.get('[data-test="login-button"]').click();
    }

    validateProductPage(){
        cy.contains('Products').should('be.visible');
    }

    validateLoginPage(){
        cy.get('[data-test="login-button"]').should('be.visible')
    }

}