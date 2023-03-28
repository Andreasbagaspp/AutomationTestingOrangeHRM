package StepDef;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.example.pageObject.LoginPage;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;

public class LoginSteps {
    private WebDriver webDriver;
    public LoginSteps() {
        super();
        this.webDriver=Hooks.webDriver ;
    }
    @Given("^user on the orange HRM Login$")
    public void userOnTheOrangeHRMLogin() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.getLoginPage();
    }

    @When("^user click username field$")
    public void userClickUsernameField()throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.clickUsernameField();
        Thread.sleep(3000);
    }

    @And("^user input username \"([^\"]*)\"$")
    public void userInputUsername(String username) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setUserName(username);
        Thread.sleep(3000);
    }

    @And("^user click password field$")
    public void userClickPasswordField()throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.clickPasswordField();
        Thread.sleep(3000);
    }

    @And("^user input password \"([^\"]*)\"$")
    public void userInputPassword(String password) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.setPassword(password);
        Thread.sleep(3000);
    }

    @And("^user click button login$")
    public void userClickButtonLogin() throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        loginPage.clickLogin();
        Thread.sleep(3000);
    }

    @Then("^user succes login with menu \"([^\"]*)\"$")
    public void userSuccesLoginWithMenu(String dashboard) throws InterruptedException {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertEquals(dashboard , loginPage.getDashboard());
        Thread.sleep(2000);
    }

    @Then("^get notification \"([^\"]*)\"$")
    public void getNotification(String notification)  {
        LoginPage loginPage = new LoginPage(webDriver);
        Assert.assertEquals(notification, loginPage.getInvalidNotif());
    }

    @Then("^field username get notif \"([^\"]*)\"$")
    public void fieldUsernameGetNotif(String notifUsername){
        LoginPage loginPage = new LoginPage(webDriver) ;
        Assert.assertEquals(notifUsername , loginPage.getNotifUsername());
    }

    @Then("^field password get notif \"([^\"]*)\"$")
    public void fieldPasswordGetNotif(String notifPassword) {
        LoginPage loginPage = new LoginPage(webDriver) ;
        Assert.assertEquals(notifPassword , loginPage.getNotifPassword());
    }
}
