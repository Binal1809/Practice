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
                // aliasing concept to give name to webelements 
                cy.get('.products').as('productLocator')
                cy.get('@productLocator').find('.product').should('have.length',4)
                // assertion on number of elements
                cy.get('.product').should('have.length',5)
                // assertion on visible number of elements
                cy.get('.product:visible').should('have.length',4)
                //Prent child chaining
                cy.get('.products').find('.product').should('have.length',4)
                //cy.get('nth:child(3) > .product-action > button').click()
                cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
                
                //cypress is asynchronus
                cy.get('.products').find('.product').each(($e1,index,$list) =>
                {
                    const name = $e1.find('h4.product-name').text()
                    if(name.includes('Cashews'))
                        $e1.find('div.product-action button').click()
                }
                )

                // handling promise
                /* text() is jquery method, so it works on resolved promise, 
                   will not work on not resolve promise use then method resolve the promise and run*/

                cy.get('.brand').then(function(logoelement)
                {
                    cy.log(logoelement.text())
                })

                // cypress commands like cy.log woild be sequential, where as console.log('sf') is non cypress will be asynchronus
                // to get console.log() as syquential we need to add then()

                // assertion , should from chai library has all syncs 
                cy.get('.brand').should('have.text','GREENKART')



                
            })
    }
)