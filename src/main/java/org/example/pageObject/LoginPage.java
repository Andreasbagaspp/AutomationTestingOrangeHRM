package org.example.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {
    public static WebDriver driver;

    public LoginPage(WebDriver driver) {
        PageFactory.initElements(driver, this);
        this.driver = driver;
    }

    @FindBy (xpath = "//h5[@class='oxd-text oxd-text--h5 orangehrm-login-title']")
    private WebElement pageLogin ;
    public boolean getLoginPage(){
        return pageLogin.isDisplayed() ;
    }

    @FindBy (xpath = "//input[@name='username']")
    private WebElement userName;
    public void clickUsernameField(){
        userName.click();
    }
    public void setUserName(String setuserName) {
        userName.sendKeys(setuserName);
    }

    @FindBy(xpath = "//input[@name='password']")
    private WebElement password;
    public void clickPasswordField(){
        password.click();
    }
    public void setPassword(String setPassword) {
        password.sendKeys(setPassword);
    }

    @FindBy(xpath = "//button[@class='oxd-button oxd-button--medium oxd-button--main orangehrm-login-button']")
    private WebElement buttonLogin ;
    public void clickLogin(){
        buttonLogin.click();
    }

    @FindBy(xpath = "//h6[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
    private WebElement dashboard ;
    public String getDashboard(){
        return dashboard.getText() ;
    }

    @FindBy(xpath = "//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
    private WebElement invalidLogin;
    public String getInvalidNotif(){
        return invalidLogin.getText() ;
    }

    @FindBy(xpath = "//form[@class='oxd-form']/div[1]//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")
    private WebElement notifRequiredUsername ;
    public String getNotifUsername(){
        return notifRequiredUsername.getText() ;
    }

    @FindBy(xpath = "//form[@class='oxd-form']/div[2]//span[@class='oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message']")
    private WebElement notifRequiredPass ;
    public String getNotifPassword(){
        return notifRequiredPass.getText();
    }

}
