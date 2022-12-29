describe('Adminlogin', () => {
        it('positive Adminlogin', () => {
            cy.forgetpassword('forgotpassword') 
            cy.Adminlogin()
        })
    })
