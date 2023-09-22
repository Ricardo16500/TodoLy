import Login from "../../../Object/Login";
import InboxAdd from "../../../Object/InboxAdd";
import inboxUpdate from "../../../Object/inboxUpdate";
import LogOut from "../../../Object/LogOut";
import inboxDelete from "../../../Object/inboxDelete";

describe('Login', () => {
  beforeEach(()=> {
      Login.visit();
  })
  it("Crear una nueva nota", ()=>{

    Login.openLogin();
    Login.email("fabiorvm16500@gmail.com");
    Login.password('Password12345');
    Login.loginBtn();


    InboxAdd.openInbox();
    InboxAdd.addNewNote("nueva nota de ejemplosd");
    InboxAdd.addBtn();

    inboxUpdate.openUpdateText();
    inboxUpdate.updateText("nuevanota de ejemplo 2");

    inboxDelete.deleteInbox();
    
    LogOut.btnLogOut();
   
  })



})