import { $ } from '@wdio/globals'
import Page from './page.js';


class HomePage extends Page {
    async openMenu(menu) {
        await $(`//android.widget.TextView[@resource-id="tab-profile"]`).click()
    }
   
}

export default new HomePage();
