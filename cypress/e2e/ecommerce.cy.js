///<reference types = "cypress"/>

import { LoginPage } from "./pages/LoginPage";
import {LogoutPage} from "./pages/LogoutPage";
import { ProductsPage } from "./pages/productsPage";

const objLoginPage = new LoginPage();
const objProductPage = new ProductsPage();
const objLogoutPage = new LogoutPage();

before(function (){
    cy.fixture('data.json').as('test_data')
    cy.visit('https://www.saucedemo.com/')
})
describe('Login to SauceDemoSite', function(){

    it('Login to sauceDemo site', function () {
        objLoginPage.enterUserName(test_data.username)
        objLoginPage.enterPassword(test_data.password)
        objLoginPage.clickLogin()
        objLoginPage.validateProductPage()
    })

    it('Validate Products are added to Cart', function(){
        objProductPage.clickAddToCartButtonBackPack()
        objProductPage.clickAddToCartButtonBikeLight()
        objProductPage.clickShoppingCartContainer()
        objProductPage.ValidateBackPackText()
        objProductPage.ValidateBikeLightText()

    })

    it('Validate Logout Functionality', () =>{
        objLogoutPage.clickBurgerMenu()
        objLogoutPage.clickLogoutButton()
        objLoginPage.validateLoginPage()
    })
})