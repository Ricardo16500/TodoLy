import Login from "./Object/Login";

describe('Login', () => {
    beforeEach(()=> {
        Login.visit();
    })
    it('ingresa a la pagina de login',()=>{
        Login.openLogin();
        Login.email("fabiorvm16500@gmail.com");
        Login.password('Password12345');
        Login.loginBtn();
    })



})