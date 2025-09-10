import { $ } from '@wdio/globals'
import Page from './page.js'


class ProfilePage extends Page {
    get profileName() {
        return $('//android.widget.TextView[@text="test cliente"]')
    }
    }
   

export default new ProfilePage();
