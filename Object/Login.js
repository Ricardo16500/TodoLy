class Login{
    visit(){
        cy.visit("http://todo.ly/");
    }
    openLogin(){
        cy.get(".HPHeaderLogin").click();
    }   
    email(email){
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxEmail').type(email);
    }
    password(password){
        cy.get('#ctl00_MainContent_LoginControl1_TextBoxPassword').type(password);
    }
    loginBtn(){
        cy.get('#ctl00_MainContent_LoginControl1_ButtonLogin').click();

    }
}

export default new Login;