package selnium.demo;

import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.NoSuchElementException;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterTest;
import org.testng.annotations.Test;

public class payTest extends BaseTest {

    String name = "name_customer";
    String phone = "phone_customer";
    String address = "address_customer";

    String getProduct1 = "//*[@id=\"prinf_watch\"]/div[1]/div/div[2]/div[3]/div/a/i";
    String getProduct2 = "//*[@id=\"prinf_watch\"]/div[2]/div/div[2]/div[3]/div/a/i";

    String user_login = "usernameLogin";
    String user_pass = "passwordLogin";
    String submit_Btn = "submit-login";
    String menu_login = "menu_login_button";
    String oderNumder = "order_number";

    String menu_cart = "/html/body/nav/ul/ul/li[3]/a";
    String button_pay = "//*[@id=\"checkout_form\"]/div[5]";
    String button_getProduct = "//*[@id=\"payment_form\"]/div[2]/button[2]";

    String message_completePay="Đặt hàng thành công";
    String message_error="Vui lòng nhập số điện thoại và địa chỉ đầy đủ";
    String message_error_need_product="Giỏ hàng trống, không thể thanh toán";
    String message_error_need_signIn="Vui long dang nhap";


    String testCaseName1 = "Thanh toán lúc đã đăng nhập đã có số điện thoại và địa chỉ";
    String testCaseName2 = "Thanh toán lúc đã đăng nhập không có số điện thoại và địa chỉ";
    String testCaseName3 = "Thanh toán lúc chưa đặt hàng";
    String testCaseName4 = "Thanh toán lúc chưa đăng nhập";



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

    public void getPruduct() throws InterruptedException {
        driver.findElement(By.xpath(getProduct1)).click();
        Thread.sleep(300);
        driver.findElement(By.xpath(getProduct2)).click();
        Thread.sleep(300);
    }

    public void clickCart() throws InterruptedException {
        driver.findElement(By.xpath(menu_cart)).click();
        Thread.sleep(1000);
    }

    public void clickPay() throws InterruptedException {
        driver.findElement(By.xpath(button_pay)).click();
        Thread.sleep(1000);
    }

    public void clickGetProduct() throws InterruptedException {
        driver.findElement(By.xpath(button_getProduct)).click();
        Thread.sleep(1000);
    }

    public void setInformation(String number, String address1) throws InterruptedException {
        driver.findElement(By.id(phone)).clear();
        driver.findElement(By.id(phone)).sendKeys(number);
        Thread.sleep(1000);
        driver.findElement(By.id(address)).clear();
        driver.findElement(By.id(address)).sendKeys(address1);
        Thread.sleep(1000);

    }

    /*--- Thanh toán lúc đã đăng nhập đã có số điện thoại và địa chỉ ---*/
    @Test(priority = 1, testName = "Thanh toán lúc đã đăng nhập đã có số điện thoại và địa chỉ")
    public void payWithLogin() throws InterruptedException {
        login("quangtrung", "1234567");
        getPruduct();
        clickCart();
        clickPay();
        setInformation("09053006110","hà huy tập đà nẵng");
        clickGetProduct();
        boolean flag;
        try
        {
            driver.switchTo().alert().getText();
            Reporter.log("Launching Google Chrome Driver for this test");
            flag= true;
        }   // try
        catch (NoAlertPresentException Ex)
        {
            flag= false;
        }
        Assert.assertTrue(flag);
        Assert.assertEquals(driver.switchTo().alert().getText(),message_completePay);
        driver.switchTo().alert().accept();
        Thread.sleep(400);
        //Kiểm tra giỏ hàng về số 0 chưa
        String orderNumber = driver.findElement(By.id(oderNumder)).getText();
        Assert.assertEquals(orderNumber,"0");
        test = extent.createTest(testCaseName1, "PASSED test case");
        Thread.sleep(1000);
    }

    /*--- Thanh toán lúc đã đăng nhập không có số điện thoại và địa chỉ ---*/
    @Test(priority = 2, testName = "Thanh toán lúc đã đăng nhập không có số điện thoại và địa chỉ")
    public void payWithLogin2() throws InterruptedException {
        login("quangtrung", "1234567");
        getPruduct();
        clickCart();
        clickPay();
        setInformation("","");
        clickGetProduct();
        boolean flag;
        try
        {
            driver.switchTo().alert().getText();
            Reporter.log("Launching Google Chrome Driver for this test");
            flag= true;
        }   // try
        catch (NoAlertPresentException Ex)
        {
            flag= false;
        }
        Assert.assertTrue(flag);
        Assert.assertEquals(driver.switchTo().alert().getText(),message_error);
        driver.switchTo().alert().accept();
        Thread.sleep(400);
        //Kiểm tra giỏ hàng có giữ nguyên không chưa
        String orderNumber = driver.findElement(By.id(oderNumder)).getText();
        Assert.assertEquals(orderNumber,"0");

        test = extent.createTest(testCaseName2, "PASSED test case");
        Thread.sleep(1000);
    }

    /*--- Thanh toán lúc chưa đặt hàng---*/
    @Test(priority = 3, testName = "Thanh toán lúc chưa đặt hàng")
    public void payWithLoginWithoutProduct() throws InterruptedException {
        login("quangtrung", "1234567");
        clickCart();
        clickPay();
        boolean flag;
        try
        {
            driver.switchTo().alert().getText();
            Reporter.log("Launching Google Chrome Driver for this test");
            flag= true;
        }   // try
        catch (NoAlertPresentException Ex)
        {
            flag= false;
        }

        Assert.assertTrue(flag);
        Assert.assertEquals(driver.switchTo().alert().getText(),message_error_need_product);
        test = extent.createTest(testCaseName3, "PASSED test case");
        driver.switchTo().alert().accept();
        Thread.sleep(1000);
    }



    /*--- Thanh toán lúc Chưa đăng nhập ---*/
    @Test(priority = 4, testName = "Thanh toán lúc chưa đăng nhập")
    public void payWithThoughLogin() throws InterruptedException {
        driver.findElement(By.xpath(getProduct1)).click();
        boolean flag;
        try
        {
            driver.switchTo().alert().getText();
            Reporter.log("Launching Google Chrome Driver for this test");
            flag= true;
        }   // try
        catch (NoAlertPresentException Ex)
        {
            flag= false;
        }
        Assert.assertTrue(flag);
        Assert.assertEquals(driver.switchTo().alert().getText(),message_error_need_signIn);
        test = extent.createTest(testCaseName4, "PASSED test case");
        driver.switchTo().alert().accept();
        Thread.sleep(1000);
    }

}
