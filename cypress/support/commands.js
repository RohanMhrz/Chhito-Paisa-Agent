Cypress.Commands.add('login', () => { 
    // cy.session('login', () => {
    cy.visit('http://uatagent.chhitopaisa.com.np/')
    cy.get('#user').type('agent_rohan')
    cy.get('#password').type('Test@123')
    cy.contains('LOG IN').click()
})

Cypress.Commands.add('forgotpassword', () => {
    // cy.session('forgotpassword', () => {
        cy.visit('http://uatagent.chhitopaisa.com.np/')
        cy.contains('Forgot Password?').click()
        cy.get('#UserName').type('agent_rohan')
        cy.get('button').contains('PROCEED').click()
    })
    
// })

Cypress.Commands.add('Validation_Wallet_TopUp', () => {
    cy.visit('http://uatagent.chhitopaisa.com.np/Balance/WalletTopup/')
        cy.get('#MobileNumber').type('9860462403')
        cy.get("#Amount").type('10')
        cy.get("#Remarks").type('test')
        cy.get('#btnClear').click()
        cy.get('#btnSubmit').click()

        // assertion when input field is empty
            // cy.get('#Amount-error').should('have.text', 'Required')
            // cy.get('#Amount-error').contains('Required')

        cy.get('button').contains('CONFIRM').click()
        cy.get('[type="password"]').eq(0).type('1234')
        cy.get('#btnConfirmmodal').click()
        // cy.get('.btn-success').type('Download Receipt').click()
})

Cypress.Commands.add('Adminlogin', () => {
    cy.visit('http://uatadmin.chhitopaisa.com.np/')
    cy.get('#user_name').type('superadmin')
    cy.get('#Password').type('Superadmin@12')
    cy.get('.btn-primary').click()
    cy.visit('http://uatadmin.chhitopaisa.com.np/Log/SmsLog')
    cy.get('.odd td').eq(2).then(sms => {
        const otp = sms[0].innerText
    let pass=otp.toString().substring(otp.toString().indexOf('OTP is') + 6);
    let pwd = pass.toString().substring(pass.toString().indexOf ('. Please'), -6);
    cy.log(pwd)
    })
})










// Cypress.Commands.add('OTPpage', () => {
//     cy.visit('http://uatagent.chhitopaisa.com.np/Home/ValidateOTP?username=4DH1t2Dwi5Xz7htKYhZPuA77tt4yh788qqw77tt4yh788qqw&extra1=FlGfeMLR7o2SHhQ91h6cvg77tt4yh788qqw77tt4yh788qqw')
// })




Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
})