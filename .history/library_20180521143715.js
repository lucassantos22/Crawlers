var webdriver = require('selenium-webdriver'),
    By = webdriver.By,
    until = webdriver.until;

    var driver = new webdriver.Builder().forBrowser('chrome').build();

    driver.get('http://www.google.com');
    driver.findElement(webdriver.By.className('gsfi')).sendKeys('se falar que não sei mentiu');
    driver.findElement(webdriver.By.cl)
