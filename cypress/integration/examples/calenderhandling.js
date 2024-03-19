import 'cypress-iframe'

describe('calender', function()
    {
            it('verify date selection', function()
            {

                const month = "6";
                const date = "15";
                const year = "2027";
                const expectedList = [month,date,year]
                // invoke URL
                cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
                // a frame embedded in document 
                //npm install -D cypress-iframe - install package
                cy.get('svg[class*="react-date-picker__calendar-button__icon"]').click()
                //month selection for that year
                cy.get('button.react-calendar__navigation__label').click()
                //year selection 
                cy.get('button.react-calendar__navigation__label').click()
                // click on button contains 2027
                cy.contains('button','2027').click()
                // eq handles index address 
                cy.get('.react-calendar__year-view__months__month').eq(Number(month)-1).click()
                cy.contains('abbr','15').click()

                //assertion

                cy.get('input[name="month"]').should('have.value',month)
                cy.get('input[name="day"]').should('have.value',date)
                cy.get('input[name="year"]').should('have.value',year)

                //asssertion

                cy.get('.react-date-picker__inputGroup__input').each(($e1,index,$list1) =>
                {
                    // retrived value attribute value and verified against list via index of each function
                        cy.wrap($e1).invoke('val').should('eq',expectedList[index])
                })







                

               





                
            })
    }
)