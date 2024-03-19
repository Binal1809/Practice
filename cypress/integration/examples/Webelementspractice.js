//Cypress - Spec

// checkboxes, Drop downs, Radio buttons 

describe('basics on different type of webelements', function()
    {
            it('open the website', function()
            {
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/AutomationPractice")
               // check the given checkbox , check function
                cy.get('input#checkBoxOption1').check()

                



                
            })
    }
)