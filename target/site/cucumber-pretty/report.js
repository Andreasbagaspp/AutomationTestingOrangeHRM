$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Orange HRM",
  "description": "",
  "id": "login-orange-hrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 9169766001,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Login with correct username and password",
  "description": "",
  "id": "login-orange-hrm;login-with-correct-username-and-password",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Login"
    },
    {
      "line": 4,
      "name": "@Postive"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user on the orange HRM Login",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user click username field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user input username \"Admin\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user click password field",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user input password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user click button login",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user succes login with menu \"Dashboard\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnTheOrangeHRMLogin()"
});
formatter.result({
  "duration": 1712121200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickUsernameField()"
});
formatter.result({
  "duration": 3061673500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userInputUsername(String)"
});
formatter.result({
  "duration": 3034830400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickPasswordField()"
});
formatter.result({
  "duration": 3039670200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userInputPassword(String)"
});
formatter.result({
  "duration": 3040114400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickButtonLogin()"
});
formatter.result({
  "duration": 4200618500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dashboard",
      "offset": 29
    }
  ],
  "location": "LoginSteps.userSuccesLoginWithMenu(String)"
});
formatter.result({
  "duration": 2010772000,
  "status": "passed"
});
formatter.after({
  "duration": 1600989499,
  "status": "passed"
});
formatter.before({
  "duration": 5687518800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Login with wrong username",
  "description": "",
  "id": "login-orange-hrm;login-with-wrong-username",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 14,
      "name": "@Login"
    },
    {
      "line": 14,
      "name": "@Negative"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "user on the orange HRM Login",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "user click username field",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user input username \"username salah\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user click password field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user input password \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user click button login",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "get notification \"Invalid credentials\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.userOnTheOrangeHRMLogin()"
});
formatter.result({
  "duration": 353442601,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickUsernameField()"
});
formatter.result({
  "duration": 3059630101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username salah",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userInputUsername(String)"
});
formatter.result({
  "duration": 3038065099,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickPasswordField()"
});
formatter.result({
  "duration": 3045462099,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 21
    }
  ],
  "location": "LoginSteps.userInputPassword(String)"
});
formatter.result({
  "duration": 3038904100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.userClickButtonLogin()"
});
formatter.result({
  "duration": 3951185900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 18
    }
  ],
  "location": "LoginSteps.getNotification(String)"
});
formatter.result({
  "duration": 18117901,
  "status": "passed"
});
formatter.after({
  "duration": 1399007700,
  "status": "passed"
});
