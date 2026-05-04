import UserData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashoboard.js'
import MenuPage from '../pages/menuPage.js'
import MyinfoPage from '../pages/myinfoPage.js'




const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myinfoPage = new MyinfoPage()


describe('USER Orange HRM Tests', () => {


 
  it('USER - Success and update Myinfo', () => {
    
    loginPage.acessLoginPage()
    loginPage.loginWithUser(UserData.UserSucess.username, UserData.UserSucess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyinfo()
    myinfoPage.fillPersonalDetails('JR')
    myinfoPage.fillEmployeeDetails('66639', '4568', '999', '2030-25-02')
    myinfoPage.fillPersonalStatus('1993-03-12')
    myinfoPage.SaveForm()

  


  })


}

)