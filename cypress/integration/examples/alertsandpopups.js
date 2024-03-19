//Cypress - Spec

// checkboxes, Drop downs, Radio buttons 

describe('basics on different type of webelements', function()
    {
            it('open the website', function()
            {
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/AutomationPractice")
               // alerts and popups
               cy.get('#alertbtn').click()
               // cypress auto handles alerts
               cy.get('[value="Confirm"]').click()

               // to get the text from POP up need to listen the browser events
               // on is the methos which is used to trigger an event through cypress
               cy.on('window:alert', (str) =>
               {
                    expect(str).to.equal('Hello , share this practice page and share your knowledge')
               })
               cy.on('window:confirm', (str) =>
               {
                    expect(str).to.equal('Hello , Are you sure you want to confirm?')
               })

               // want to open the landing page on same tab than using below invoke method using remove attribute we can achive that 
               cy.get('#opentab').invoke('removeAttr','target').click()

               // if the newly open page URL has different origin than we need to set the origin under that the following execution steps needs to be written
               cy.origin('https://www.qaclickacademy.com', () => {
                cy.get('#navbarSupportedContent a[href*="about"]').click()

                cy.get(".mt-50 h2").should('contain','Welcome to QAClick Academy ')
                })


               





                
            })
    }
)