describe('User can open Login modal', () => {
  it('Login Modal Can be Open and Have Correct Spesification', () => {
    cy.visit("http://127.0.0.1:8000");  
    cy.get('.header__top__right > :nth-child(1) > a').should('have.text', 'Sign in');
    //click hidden element
    cy.get('#signinmodal > .modal-dialog > .modal-content').click({force:true});
    cy.contains('Sign in').click({force:true});
    cy.get('.login-form > :nth-child(2) > p').should('have.text', 'Username*');
    cy.get('.login-form > :nth-child(3) > p').should('have.text', 'Password*');  
  })

  it('user can login', () => {
    cy.visit("http://127.0.0.1:8000");
    cy.get('.header__top__right > :nth-child(1) > a').should('have.text', 'Sign in');
    
    //click hidden element
    cy.contains('Sign in').click({force:true});    
    cy.get('#username', { timeout: 10000 }).eq(0)
      .type('admin1', { force: true });
    cy.get('#password').eq(0)
      .type('admin123', { force: true }); 
    cy.get('#signinbtn').eq(0)
      .click({ force: true });     
    // cy.contains('Sign in Successfully.');   

    //Login validation comtains
    cy.get('.header__nav__option > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').should('have.text', 'Profile'); 
    cy.get('.header__nav__option > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').should('have.text', 'My Orders'); 
    cy.get('.header__nav__option > .dropdown > .dropdown-menu > :nth-child(3) > .dropdown-item').should('have.text', 'Open Dashboard Admin'); 
    cy.get('.header__nav__option > .dropdown > .dropdown-menu > :nth-child(5) > .dropdown-item').should('have.text', '\n                                        Sign out\n                                    '); 
  })

})