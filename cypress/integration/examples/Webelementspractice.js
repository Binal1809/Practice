//Cypress - Spec

// checkboxes, Drop downs, Radio buttons 

describe('basics on different type of webelements', function()
    {
            it('open the website', function()
            {
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/AutomationPractice")
               // check the given checkbox , check function to check the box, and validate the status of checked
                cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value','option1')
                cy.get('input#checkBoxOption1').uncheck().should('not.be.checked').and('have.value', 'option1')
                // multiple checkbox selection based on value attribute
                cy.get('input[type="checkbox"]').check(['option2','option3'])

                // static drop down selection using value attribute
                cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')

                // dynamic dropdown
                cy.get('#autocomplete').type('ind')
                cy.get('li.ui-menu-item div').each(($e1,index,$list1) =>
                {
                    // each resolves promise and cypress or jquery fx can be used in the same
                    if($e1.text()=="India")
                    {
                        $e1.click()
                    }
                })

                cy.get('#displayed-text').should('be.visible')
                cy.get('#hide-textbox').click()
                cy.get('#displayed-text').should('not.be.visible')
                cy.get('#show-textbox').click()
                cy.get('#displayed-text').should('be.visible')

                //radio buttons
 
                cy.get('[value="radio2"]').check().should('be.checked')





                
            })
    }
)