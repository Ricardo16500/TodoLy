class LogOut{
    btnLogOut(){
    cy.get('#ctl00_HeaderTopControl1_LinkButtonLogout').click();
    }
}
export default new LogOut;