//Cypress - Spec

// checkboxes, Drop downs, Radio buttons 

describe('basics on different type of webelements', function()
    {
            it('open the website', function()
            {
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/AutomationPractice")

                //forcable click on element on hidden/invisible element
                cy.contains('Reload').click({force: true})
                //mousehover is not directly supported, jquery show method can be used
                // apply jquery method requires immediate parent for invoke show

                cy.get('.mouse-hover-content').invoke('show')
                cy.contains('Top').click()
                // assertion on URL
                cy.url().should('contain','top')



                

               





                
            })
    }
)