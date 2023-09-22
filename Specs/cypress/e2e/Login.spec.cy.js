import Login from "../../../Object/Login";
import LogOut from "../../../Object/LogOut";


describe('Login', () => {
  beforeEach(()=> {
      Login.visit();
  })
  it('ingresa a la pagina de login',()=>{
      Login.openLogin();
      Login.email("fabiorvm16500@gmail.com");
      Login.password('Password12345');
      Login.loginBtn();

      LogOut.btnLogOut();
  })
  



})