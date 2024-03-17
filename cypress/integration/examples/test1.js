//Cypress - Spec

//const { has } = require("cypress/types/lodash")

describe('my first test', function()
    {
            it('open the website', function()
            {
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/seleniumPractise/#")
                // type in a search box
                cy.get('.search-keyword').type('ca')
                // implicit wait
                cy.wait(2000)
                // assertion on number of elements
                cy.get('.product').should('have.length',5)
                // assertion on visible number of elements
                cy.get('.product:visible').should('have.length',4)
                //Prent child chaining
                cy.get('.products').find('.product').should('have.length',4)
                //cy.get('nth:child(3) > .product-action > button').click()
                cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
                // code to add specific product passed from test data
                

                
            })
    }
)