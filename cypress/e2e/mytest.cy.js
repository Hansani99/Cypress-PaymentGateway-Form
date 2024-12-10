describe('Payment Gateway',()=>{

    it.only('Test One',()=>{

        cy.visit('https://www.payway.com/request-a-demo');
        //form details
        cy.get('#firstname-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('Sumudu Hansani');
        cy.get('#lastname-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('Sirimanna Hettige');
        cy.get('#company-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('XYZ');

        //drop down validation
        cy.get('#country_dropdown-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').select('Canada').should('have.value','Canada');


        //phone number
        cy.get('#phone-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('078237532');
        cy.get('#email-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('sumuduhansani.25@gmail.com');


        //checkbox
        //check the visibiliti of the check box
        cy.get('#payment_solution_0-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').should('be.visible');

        //selecting a single check box
        cy.get('#payment_solution_0-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').check().should('be.checked')
        //select the all the checkbox
        //cy.get("#payment_solution_0-11a66940-36e1-4fe5-9cf8-a10fa61e17b5").check().should('be.checked')
       // cy.get("#payment_solution_1-11a66940-36e1-4fe5-9cf8-a10fa61e17b5").uncheck().should('not.be.checked')

       //payment dropdaown
       cy.get("#current_payment_solution_provider-11a66940-36e1-4fe5-9cf8-a10fa61e17b5").select('Stripe').should('have.value','Stripe');


       cy.get('#message-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type("hytsgkojcihu");

        cy.get("[value='Submit']").click();



    })

    //one by one test cases execution
    it('Test Two',()=>{

        cy.get('#firstname-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('Sumudu Hansani');
        cy.get('#lastname-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('Sirimanna Hettige');
        cy.get('#company-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('XYZ');

    })

    it('Dropdown Validation',()=>{

        cy.get('#country_dropdown-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').select('Canada').should('have.value','Canada');

    })
    
    it('Phone number',()=>{
        cy.get('#phone-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('078237532');
        cy.get('#email-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type('sumuduhansani.25@gmail.com');

    })
    
    it('checkbox validation',()=>{

        //check the visibiliti of the check box
        cy.get('#payment_solution_0-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').should('be.visible');

        //selecting a single check box
        cy.get('#payment_solution_0-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').check().should('be.checked')
        //select the all the checkbox
        cy.get("#payment_solution_0-11a66940-36e1-4fe5-9cf8-a10fa61e17b5").check().should('be.checked')
        cy.get("#payment_solution_1-11a66940-36e1-4fe5-9cf8-a10fa61e17b5").uncheck().should('not.be.checked')
    })

    it('Payment selection dropdown',()=>{
        cy.get("#current_payment_solution_provider-11a66940-36e1-4fe5-9cf8-a10fa61e17b5").select('Stripe').should('have.value','Stripe');
    })

    it('Message box',()=>{

        cy.get('#message-11a66940-36e1-4fe5-9cf8-a10fa61e17b5').type("hytsgkojcihu");
    })

    it('Button click',()=>{

        cy.get('.hs-button primary large').click();
    })

    
})