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

    String testName_case1 = "Đăng nhập bằng tài khoản admin";
    String testName_case2 = "Đăng nhập bằng tài khoản user hợp lệ";
    String testName_case3 = "Đăng nhập bằng tài khoản với username không đúng";
    String testName_case4 = "Đăng nhập bằng tài khoản với password không đúng";
    String testName_case5 = "Đăng nhập bằng tài khoản với username hoặc password có chứa dấu tiếng việt";
    String testName_case6 = "Đăng Nhập bằng tài khoản với username trống";
    String testName_case7 = "Đăng Nhập bằng tài khoản với password trống";
    String testName_case8 = "Đăng nhập bằng tài khoản với username ít hơn 6 kí tự";
    String testName_case9 = "Đăng nhập bằng tài khoản với password ít hơn 6 kí tự";

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
    @Test(priority = 1 ,testName = "Đăng nhập bằng tài khoản admin")
    public void loginByAdmin() throws InterruptedException {
        login("admin", "123456");
        //Set tên test case trong file html
        test = extent.createTest(testName_case1, "PASSED test case");
        //trang đăng nhập vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);
        // Tên admin khi đăng nhập vào phải trùng với admin
        String name = driver.findElement(By.id(menu_account)).getText();
        Assert.assertEquals(name,"admin");
        // Chức năng của admin phải có quản lý
//        String fun =driver.findElement(By.xpath("/html/body/nav/ul/div/div/div[1]/a/p")).g;
//        Assert.assertEquals(fun,"Quản lý");
    }

    /*--- Đăng nhập bằng tài khoản user hợp lệ ---*/
    @Test(priority = 2,testName = "Đăng nhập bằng tài khoản user hợp lệ")
    public void loginByUserInvalidUser() throws InterruptedException {
        login("quangtrung", "1234567");
        String name = driver.findElement(By.id(menu_account)).getText();
        Assert.assertEquals(name, "quangtrung");
        test = extent.createTest(testName_case2, "PASSED test case");
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);
    }

    /*--- Đăng nhập bằng tài khoản với username hoặc password không đúng */
    @Test(priority = 3,testName = "Đăng nhập bằng tài khoản với username không đúng")
    public void loginWithValidAccountUsername() throws InterruptedException {
        login("helloo", "1234567");
        String status = driver.findElement(By.id(status_Login)).getText();
        Assert.assertEquals(status, errorMessage_validAccount);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
        test = extent.createTest(testName_case3, "PASSED test case");
    }

    /*--- Đăng nhập bằng tài khoản với username hoặc password không đúng */
    @Test(priority = 4,testName = "Đăng nhập bằng tài khoản với password không đúng")
    public void loginWithValidAccountPassword() throws InterruptedException {
        login("hellooo", "123456");
        String status = driver.findElement(By.id(status_Login)).getText();
        test = extent.createTest(testName_case4, "PASSED test case");
        Assert.assertEquals(status, errorMessage_validAccount);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng nhập bằng tài khoản với username hoặc password có chứa dấu tiếng việt */
    @Test(priority = 5,testName = "Đăng nhập bằng tài khoản với username hoặc password có chứa dấu tiếng việt")
    public void loginWithValidAccount() throws InterruptedException {
        login("quangtrùng", "123456");
        String status = driver.findElement(By.id(status_Login)).getText();
        test = extent.createTest(testName_case5, "PASSED test case");
        Assert.assertEquals(status, errorMessage_validAccount);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }


    /*--- Đăng Nhập bằng tài khoản với username trống */
    @Test(priority = 5,testName = "Đăng Nhập bằng tài khoản với username trống")
    public void loginWithUsernameBlankField() throws InterruptedException {
        login("", "trung123");
        String status = driver.findElement(By.id(status_Login)).getText();
        test = extent.createTest(testName_case6, "PASSED test case");
        Assert.assertEquals(status, errorMessage_userName);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng nhập bằng tài khoản với password trống */
    @Test(priority = 6,testName = "Đăng nhập bằng tài khoản với password trống")
    public void loginWithPasswordBlankField() throws InterruptedException {
        login("quangtrung", "");
        String status = driver.findElement(By.id(status_Login)).getText().toLowerCase();
        test = extent.createTest(testName_case7, "PASSED test case");
        Assert.assertEquals(status, errorMessage_passWord);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng nhập bằng tài khoản với username ít hơn 6 kí tự */
    @Test(priority = 7,testName = "Đăng nhập bằng tài khoản với username ít hơn 6 kí tự")
    public void loginWithUsernameNotEnough() throws InterruptedException {
        login("123", "quangtrung");
        String status = driver.findElement(By.id(status_Login)).getText().toLowerCase();
        test = extent.createTest(testName_case8, "PASSED test case");
        Assert.assertEquals(status, errorMessage_UsernameEnough);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }

    /*--- Đăng nhập bằng tài khoản với password ít hơn 6 kí tự */
    @Test(priority = 8,testName = "Đăng nhập bằng tài khoản với password ít hơn 6 kí tự")
    public void loginWithPasswordNotEnough() throws InterruptedException {
        login("quangtrung", "1234");
        String status = driver.findElement(By.id(status_Login)).getText().toLowerCase();
        test = extent.createTest(testName_case9, "PASSED test case");
        Assert.assertEquals(status, errorMessage_PasswordEnough);
        Assert.assertEquals(driver.getCurrentUrl(), URL_login);
    }
    @AfterTest
    public void tearDown() {
        //to write or update test information to reporter
        extent.flush();
    }

}
