import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {
    get email() {
         return $('//android.widget.EditText[@resource-id="email"]') }
    get password() {
         return $('//android.widget.EditText[@resource-id="password"]') }
    get btnLogin() {
         return $('~Login') }

    async login(email, password) {
        await this.email.setValue(email)
        await this.password.setValue(password) 
        await this.btnLogin.click()
    }
   
}

export default new LoginPage();
