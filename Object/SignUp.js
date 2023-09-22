class SignUp{
    visit(){
        cy.visit("http://todo.ly/");
    }
    openSignUp(){
        cy.get(".HPHeaderSignup").click();
    }
    fullName(fullName){
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxFullName').type(fullName);
    }
    email(email){
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxEmail').type(email);
    }
    password(password){
        cy.get('#ctl00_MainContent_SignupControl1_TextBoxPassword').type(password);
    }
    agreeBtn(){
        cy.get('#ctl00_MainContent_SignupControl1_CheckBoxTerms').click();
    }
    registertBtn(){
        cy.get('#ctl00_MainContent_SignupControl1_ButtonSignup').click();
    }



}
export default new SignUp;