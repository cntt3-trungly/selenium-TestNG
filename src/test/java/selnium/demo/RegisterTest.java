package selnium.demo;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

public class RegisterTest extends BaseTest {

    String menu_login = "menu_login_button";
    String menu_register = "//*[@id=\"login_box\"]/div/p[3]";
    String status_SignUp = "statusSignup";

    String userName_SignUp = "usernameSignup";
    String password_SignUp = "passwordSignup";
    String repassword_SignUp = "RepasswordSignup";
    String button_SignUp = "signup-button";
    String menu_account = "menu_account_login";

    String status_message1 = "Tên tài khoản đã tồn tại";
    String status_message2 = "Vui lòng nhập username và password lớn hơn 6 kí tự";
    String status_message3 = "Vui lòng nhập đầy đủ thông tin";
    String status_message4 = "Vui lòng nhập thông tin không chứa dấu";
    String status_message5 = "Vui lòng không nhập cứ tự đặt biệt hoặc username và password lớn hơn 6 kí tự";


    String testName_case1 = "Đăng ký bằng tài khoản hợp lệ";
    String testName_case2 = "Đăng ký bằng tên username đã có ";
    String testName_case3 = "Đăng ký với password không hơp lệ";
    String testName_case4 = "Đăng ký với username ít hơn 6 kí tự";
    String testName_case5 = "Đăng ký với rePassword không đúng";
    String testName_case6 = "Đăng ký với username hoặc passwork để trống";
    

    public void signUp(String userName, String password, String repassword) throws InterruptedException {
        driver.findElement(By.id(menu_login)).click();
        Thread.sleep(500);
        driver.findElement(By.xpath(menu_register)).click();
        Thread.sleep(500);
        driver.findElement(By.id(userName_SignUp)).sendKeys(userName);
        Thread.sleep(500);
        driver.findElement(By.id(password_SignUp)).sendKeys(password);
        Thread.sleep(500);
        driver.findElement(By.id(repassword_SignUp)).sendKeys(repassword);
        Thread.sleep(500);
        driver.findElement(By.id(button_SignUp)).click();
        Thread.sleep(500);
    }

    /*--- Đăng nhập bằng tài khoản hợp lê ---*/
    @Test(priority = 1 ,testName = "Đăng ký bằng tài khoản hợp lệ")
    public void signUpInvalidAccount() throws InterruptedException {
        signUp("nhatnguyen", "123456","123456");
        //Set tên test case trong file html
        test = extent.createTest(testName_case1, "PASSED test case");
        //trang đăng kí vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

        String name = driver.findElement(By.id(menu_account)).getText();
        Assert.assertEquals(name,"nhatnguyen1");
        Thread.sleep(1000);
    }

    /*--- Đăng ký bằng  username đã có ---*/
    @Test(priority = 2 ,testName = "Đăng ký bằng  username đã có ")
    public void signUpValidAccount() throws InterruptedException {
        signUp("quangtrung", "1234567","1234567");
        //Set tên test case trong file html
        test = extent.createTest(testName_case2, "PASSED test case");
        //trang đăng kí vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

        String status = driver.findElement(By.id(status_SignUp)).getText();
        Assert.assertEquals(status,status_message1);
        Thread.sleep(1000);
    }

    /*--- Đăng ký với password ít hơn 6 kí tự---*/
    @Test(priority = 3 ,testName = "Đăng ký với password ít hơn 6 kí tự")
    public void signUpValidAccount2() throws InterruptedException {
        signUp("hoanganh", "1234","1234");
        //Set tên test case trong file html
        test = extent.createTest(testName_case3, "PASSED test case");
        //trang đăng kí vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

        String status = driver.findElement(By.id(status_SignUp)).getText();
        Assert.assertEquals(status,status_message2);
        Thread.sleep(1000);
    }

    /*--- Đăng ký với username ít hơn 6 kí tự---*/
    @Test(priority = 4 ,testName = "Đăng ký với username ít hơn 6 kí tự")
    public void signUpValidAccount3() throws InterruptedException {
        signUp("hoang", "1234567","1234567");
        //Set tên test case trong file html
        test = extent.createTest(testName_case4, "PASSED test case");
        //trang đăng kí vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

        String status = driver.findElement(By.id(status_SignUp)).getText();
        Assert.assertEquals(status,status_message2);
        Thread.sleep(1000);
    }

    /*--- Đăng ký với rePassword không đúng---*/
    @Test(priority = 5 ,testName = "Đăng ký với rePassword không đúng")
    public void signUpValidAccount4() throws InterruptedException {
        signUp("hoang", "1234567","12345");
        //Set tên test case trong file html
        test = extent.createTest(testName_case5, "PASSED test case");
        //trang đăng kí vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

        String status = driver.findElement(By.id(status_SignUp)).getText();
        Assert.assertEquals(status,status_message3);
        Thread.sleep(1000);
    }

    /*--- Đăng ký với username hoặc passwork để trống ---*/
    @Test(priority = 6 ,testName = "Đăng ký với username hoặc passwork để trống")
    public void signUpValidAccount5() throws InterruptedException {
        signUp("hoang", "","12345");
        //Set tên test case trong file html
        test = extent.createTest(testName_case6, "PASSED test case");
        //trang đăng kí vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

        String status = driver.findElement(By.id(status_SignUp)).getText();
        Assert.assertEquals(status,status_message3);
        Thread.sleep(1000);
    }

    /*--- Đăng ký với username chứa kí tự dấu ---*/
    @Test(priority = 7 ,testName = "Đăng ký với username chứa kí tự dấu")
    public void signUpValidAccount6() throws InterruptedException {
        signUp("hoangtrúng", "1234567","1234567");
        //Set tên test case trong file html
        test = extent.createTest(testName_case6, "PASSED test case");
        //trang đăng kí vào phải trùng địa chỉ index
        Assert.assertEquals(driver.getCurrentUrl(), URL_index);

        String status = driver.findElement(By.id(status_SignUp)).getText();
        Assert.assertEquals(status,status_message5);
        Thread.sleep(1000);
    }

}
