package selnium.demo;


import org.openqa.selenium.By;

import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;
import org.testng.ITestResult;
import org.testng.annotations.*;

import java.util.concurrent.TimeUnit;




public class LoginTest extends BaseTest {



    String user_login = "usernameLogin";
    String user_pass = "passwordLogin";
    String submit_Btn = "submit-login";
    String menu_login = "menu_login_button";

    String menu_account = "menu_account_login";
    String status_Login = "statusLogin";

    String errorMessage_userName = "Username không được để trống";
    String errorMessage_passWord = "Password không được để trống";
    String errorMessage_validAccount= "sai mật khẩu hoặc tài khoản";
    String errorMessage_UsernameEnough= "Username phải trên 6 kí tự";
    String errorMessage_PasswordEnough= "Password phải trên 6 kí tự";

    public void login(String userName, String password) throws InterruptedException {
        driver.findElement(By.id(menu_login)).click();
        Thread.sleep(500);
        driver.findElement(By.id(user_login)).sendKeys(userName);
        Thread.sleep(500);
        driver.findElement(By.id(user_pass)).sendKeys(password);
        Thread.sleep(500);
        driver.findElement(By.id(submit_Btn)).click();
        Thread.sleep(500);
    }

//    @Test
//    public void testCase1() {
//        test = extent.createTest("Test Case 1", "PASSED test case");
//        Assert.assertTrue(true);
//    }

    /*--- Đăng nhập bằng tài khoản admin ---*/
    @Test
    public void loginByAdmin() throws InterruptedException {
        login("admin", "123456");
        test = extent.createTest("Test Case 1", "PASSED test case");
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

    }

    /*--- Đăng nhập bằng tài khoản user hợp lệ ---*/
    @Test
    public void loginByUserInvalidUser() throws InterruptedException {
        login("quangtrung", "1234567");
        String name = driver.findElement(By.id(menu_account)).getText();
        Assert.assertEquals(name, "quangtrung");
        test = extent.createTest("Test Case 2", "PASSED test case");
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);
    }

    /*--- Đăng nhập bằng tài khoản với username hoặc password không đúng */
    @Test
    public void loginWithValidAccount() throws InterruptedException {
        login("helloo", "1234567");
        String status = driver.findElement(By.id(status_Login)).getText();
        test = extent.createTest("Test Case 3", "PASSED test case");
        Assert.assertEquals(status, errorMessage_validAccount);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng Nhập bằng tài khoản với username trống */
    @Test
    public void loginWithUsernameBlankField() throws InterruptedException {
        login("", "trung123");
        String status = driver.findElement(By.id(status_Login)).getText();
        test = extent.createTest("Test Case 4", "PASSED test case");
        Assert.assertEquals(status, errorMessage_userName);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng nhập bằng tài khoản với passwork trống */
    @Test
    public void loginWithPasswordBlankField() throws InterruptedException {
        login("quangtrung", "");
        String status = driver.findElement(By.id(status_Login)).getText().toLowerCase();
        test = extent.createTest("Test Case 5", "PASSED test case");
        Assert.assertEquals(status, errorMessage_passWord);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng nhập bằng tài khoản với username ít hơn 6 kí tự */
    @Test
    public void loginWithUsernameNotEnough() throws InterruptedException {
        login("123", "quangtrung");
        String status = driver.findElement(By.id(status_Login)).getText().toLowerCase();
        test = extent.createTest("Test Case 6", "PASSED test case");
        Assert.assertEquals(status, errorMessage_UsernameEnough);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng nhập bằng tài khoản với passwork trống */
    @Test
    public void loginWithPasswordNotEnough() throws InterruptedException {
        login("quangtrung", "1234");
        String status = driver.findElement(By.id(status_Login)).getText().toLowerCase();
        test = extent.createTest("Test Case 7", "PASSED test case");
        Assert.assertEquals(status, errorMessage_PasswordEnough);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }
    @AfterTest
    public void tearDown() {
        //to write or update test information to reporter
        extent.flush();
    }


}
