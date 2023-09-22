import SignUp from "../../../Object/SignUp";

describe('SignUp', () => {
  beforeEach(()=> {
      SignUp.visit();
  })
  it('ingresa al popup de signup',()=>{
      SignUp.openSignUp();
      SignUp.fullName("pepito ejemplo");
      SignUp.email("ejemplo1@ejemplo.com");
      SignUp.password('Password12345');
      SignUp.agreeBtn();
      SignUp.registertBtn();
  })



})