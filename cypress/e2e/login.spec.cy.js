import UserData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashoboard.js'



const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()


describe('LOGIN Orange HRM Tests', () => {


 
  it('Login - Success and update Myinfo', () => {
    
    loginPage.acessLoginPage()
    loginPage.loginWithUser(UserData.UserSucess.username, UserData.UserSucess.password)
    dashboardPage.checkDashboardPage()

  })

  it('Login - Not Sucess', () => {

    loginPage.acessLoginPage()
    loginPage.loginWithUser(UserData.UserFail.username, UserData.UserFail.password)
    loginPage.checkAcessInvalid()
    
  }

  )

}

)