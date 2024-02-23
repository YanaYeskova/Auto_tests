 
  const STANDARD_USER = 'standard_user'
  const LOCKED_OUT_USER = 'locked_out_user'
  const PROBLEM_USER = 'problem_user'
  const USER_PASSWORD = 'secret_sauce'

   describe('Verify STANDARD_USER', () => {
      beforeEach (() => {
        cy.visit('/');
        cy.login(STANDARD_USER, USER_PASSWORD);
      })

    it('Standart user', () => {
      cy
       .get('[data-test="add-to-cart-sauce-labs-backpack"]')
       .click()
       .get('[id="shopping_cart_container"]')
       .click()
       .get('[class="inventory_item_price"]').should('have.text', '$29.99')
       .get('[id="react-burger-menu-btn"]')
       .click()
       .get('[id="logout_sidebar_link"]')
       .click() 
       .get('.login_logo').should('have.text', 'Swag Labs')
    });
  })

 describe('Verify LOCKED_OUT_USER', () => {
      beforeEach (() => {
        cy.visit('/');
        cy.login(LOCKED_OUT_USER, USER_PASSWORD);
      })

      it('Locked out user', () => {
      });
    })

describe('Verify PROBLEM_USER', () => {
        beforeEach (() => {
          cy.visit('/');
          cy.login(PROBLEM_USER, USER_PASSWORD);
        })

        it('Problem user login', () => {
          cy
          .get('[id="react-burger-menu-btn"]')
          .click()
          .get('[id="logout_sidebar_link"]')
          .click()
        });
      })