package selnium.demo;

import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.DataProvider;

public class DataProviderClass {
    @BeforeMethod
    @DataProvider(name = "test-data-search-with-fullText")
    public static Object[][] dataSearch1(){
        return new Object[][]{
                {"Đồng hồ Calvin Klein"},{"Đồng hồ TissotT006"},
                {"Đồng hồ TissotT086"},{"Đồng hồ TissotT065"},
                {"Đồng hồ Ogival"},{"Đồng hồ Orient"},
                {"Đồng hồ Benley BL1839"},{"Đồng hồ Beley BL1831"}
        };
    }
    @BeforeMethod
    @DataProvider(name = "test-data-search-with-nonText")
    public static Object[][] dataSearch2(){
        return new Object[][]{
                {"Đồng hồ Rolex"},  {"Đồng hồ 3$"}
        };
    }
    @BeforeMethod
    @DataProvider(name = "test-data-search-with-nearlyText")
    public static Object[][] dataSearch3(){
        return new Object[][]{
                {"Đồng hồ "},{"Đồng"},{"Tissot"},{"T0"}
        };
    }
}
