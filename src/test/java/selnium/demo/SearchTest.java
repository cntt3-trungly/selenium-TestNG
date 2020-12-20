package selnium.demo;


import org.openqa.selenium.By;
import org.openqa.selenium.NoAlertPresentException;
import org.openqa.selenium.WebElement;
import org.testng.Assert;
import org.testng.Reporter;

import org.testng.annotations.Test;

import java.util.List;

public class SearchTest extends BaseTest {
    String URL_search = "file:///C:/Users/Admin/Desktop/dongho_cuong/index.html?button-search=";

    String input_search = "search";
    String button_search = "button-search";


    public void search(String searchText) throws InterruptedException {
        driver.findElement(By.id(input_search)).sendKeys(searchText);
        Thread.sleep(300);
        driver.findElement(By.name(button_search)).click();
    }

    @Test(testName = "Tìm kiếm bằng tên đầy đủ", dataProvider = "test-data-search-with-fullText", dataProviderClass = DataProviderClass.class)
    public void searchFullName(String data) throws InterruptedException {
        search(data);
        String result = driver.findElement(By.xpath("//*[@id=\"prinf_watch\"]/div/div/div[2]/p[1]")).getText();
        Assert.assertEquals(driver.getCurrentUrl(), URL_search);
        Assert.assertEquals(result, data);
        test = extent.createTest("Tìm kiếm bằng tên sản phẩm đầy đủ", "PASSED test case");
    }

        @Test(testName = "Tim kiếm bằng với tên sản phẩm không tồn tại", dataProvider = "test-data-search-with-nonText",
    dataProviderClass = DataProviderClass.class)
    public void searchNoExistName(String data) throws InterruptedException {
        search(data);
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
        Reporter.log( driver.switchTo().alert().getText());
        //        check xem có xuất hiện alert thông báo serch không thành công
        Assert.assertTrue(flag);
        Assert.assertEquals(driver.switchTo().alert().getText(),"Không có sản phẩm phù hợp");
        test = extent.createTest("Tìm kiếm bằng tên sản phẩm không tồn tại", "PASSED test case");
    }
    @Test(testName = "Tim kiếm bằng với tên sản phẩm có chứa chuỗi nhập vào", dataProvider = "test-data-search-with-nearlyText",
            dataProviderClass = DataProviderClass.class)
    public void searchWithSmallString(String data) throws InterruptedException {
        search(data);
        WebElement countProduct = driver.findElement(By.xpath("//*[@id=\"prinf_watch\"]"));
        int numberOfChilds = Integer.parseInt(countProduct.getAttribute("childElementCount"));
        for (int i = 1; i <= numberOfChilds; i++) {
            Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"prinf_watch\"]/div[" + i + "]/div/div[2]/p[1]")).getText().contains(data));
            Assert.assertEquals(driver.getCurrentUrl(),URL_search);
        }
        test = extent.createTest("Tim kiếm bằng với tên sản phẩm có chứa chuỗi nhập vào", "PASSED test case");
    }

}
