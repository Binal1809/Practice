import 'cypress-iframe'

describe('frames basics', function()
    {
            it('open the website', function()
            {
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/AutomationPractice")
                // a frame embedded in document 
                //npm install -D cypress-iframe - install package
                cy.frameLoaded("#courses-iframe")
                // below command makes cypress to switch to iframe
                cy.iframe().find('a[href*="mentorship"]').eq(0).click()
                cy.wait(2000)
                cy.iframe().find('h1[class*="pricing-title"]').should('have.length',2)




                

               





                
            })
    }
)