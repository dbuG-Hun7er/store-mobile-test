export const config = {
      //runner: 'local',
      //port: 4723,
           
        user: 'oauth-poseidonsaga333-92c55',
        key: 'bc45c9ac-aa67-4fe1-a41d-9ebfc069d8f3',
        hostname: 'ondemand.us-west-1.saucelabs.com',
        port: 443,
        baseUrl: 'wd/hub',
        
        

      specs: [
        './test/specs/**/*.js'
    ],
    maxInstances: 1,
            capabilities: [
                {
        platformName: 'Android',
        browserName: 'Chrome',
        'appium:deviceName': 'Samsung.*',
        'appium:automationName': 'UiAutomator2',
        "appium:disableIdLocatorAutocompletion": true,
        'sauce:options': {
            appiumVersion: 'stable',
            build: 'ShopApp - Android - Chrome',
            name: 'shop-android',
        
        },
        },
        {
  
       // platformName: 'Android',
        //'appium:deviceName': 'ebacTest',
        //'appium:platformVersion': '11.0',
        //'appium:automationName': 'UiAutomator2',
        //'appium:app': `${process.cwd()}/app/ebacshop.apks`,
        //'appium:appWaitActivity': '.MainActivity',
        //'appium:disebleIdLocatorAutocompletion': true,

    }],

      logLevel: 'info',
     bail: 0,
      waitforTimeout: 10000,
          connectionRetryCount: 3,
       framework: 'mocha',
        reporters: ['spec',
                ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: true,
        }]
        ],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
    afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    if (error) {
        await browser.takeScreenshot();
    }
}
}
