describe('login', () => {
    it('login', () => {
        cy.login()
        cy.Validation_Wallet_TopUp()  
    })
})
