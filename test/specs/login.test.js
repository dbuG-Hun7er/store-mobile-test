import { expect } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import loginPage from '../pageobjects/login.page.js'
import profilePage from '../pageobjects/profile.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
      
        await homePage.openMenu('profile')
        await loginPage.login('cliente.test@ebac.com' , 'test123' )
        await homePage.openMenu('profile')

        await expect(profilePage.profileName).toBeDisplayed()
        await expect(profilePage.profileName).toHaveText('test cliente')
      })
})


