//Cypress - Spec

// checkboxes, Drop downs, Radio buttons 

describe('basics on different type of webelements', function()
    {
            it('open the website', function()
            {
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/AutomationPractice")
                cy.get('div.left-align tr td:nth-child(2)').each(($e1,index,$list1) =>
                {
                    const webtext = $e1.text()
                    if(webtext.includes("TestNG"))
                    {
                        //text is jquery method so it require promise resolution
                        // next can only be applied on get function
                        cy.get('div.left-align tr td:nth-child(2)').eq(index).next().then(function(price)
                        {
                            const pricetext = price.text()
                            expect(pricetext).to.equal('20')
                        })
                    }
                })
              

               





                
            })
    }
)