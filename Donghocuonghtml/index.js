var watch = JSON.parse(localStorage.getItem('watch'));
if (watch === null) {
    watch = [];
    watch = [{
        id: 0,
        name: "Đồng hồ Calvin Klein",
        price: "90000",
        note: "Calvin Klein có đường kính 42 mm và độ dày 9 mm",
        cate: "Đồng hồ nam",
        image: "img/1.jpg"
    }, {
        id: 1,
        name: "Đồng hồ TissotT006",
        price: "50000",
        note: "có đường kính 39.3 mm và độ dày 11.55 mm",
        cate: "Đồng hồ nam",
        image: "img/191973136688-1-d0yzyfbu-480-480.jpg"
    }, {
        id: 2,
        name: "Đồng hồ TissotT086",
        price: "130000",
        note: "Đường kính 41 mm cùng độ dày 9.8 mm",
        cate: "Đồng hồ nữ",
        image: "img/674188264174-1-ajawcr3j-480-480.jpg"
    }, {
        id: 3,
        name: "Đồng hồ TissotT065",
        price: "90000",
        note: "là một mẫu đồng hồ cơ thuộc thương hiệu Tissot của Thuỵ Sĩ",
        cate: "Đồng hồ nam",
        image: "img/674188265997-1-kakji7cv-480-480.jpg"
    }, {
        id: 4,
        name: "Đồng hồ Ogival",
        price: "50000",
        note: "đồng hồ Ogival Skeleton chưa bao giờ hết HOT trên thị trường",
        cate: "Đồng hồ nữ",
        image: "img/796483493209-1-mt1fapcb-480-480.jpg"
    }, {
        id: 5,
        name: "Đồng hồ Orient",
        price: "60000",
        note: "Made in Thụy Sĩ by Rolex",
        cate: "Đồng hồ nam",
        image: "img/8430622662218-1-khnrkxlq-480-480.jpg"
    }, {
        id: 6,
        name: "Đồng hồ Benley BL1839",
        price: "300000",
        note: "Được sản xuất thủ công tại Anh",
        cate: "Đồng hồ nữ",
        image: "img/8430622729027-1-tindierw-480-480.jpg"
    }, {
        id: 7,
        name: "Đồng hồ Beley BL1831",
        price: "25000",
        note: "Được sản xuất thủ công tại Anh",
        cate: "Đồng hồ nam",
        image: "img/8430622742859-1-lrsy3vvt-480-480.jpg"
    }];
    localStorage.setItem("watch", JSON.stringify(watch));
}
function listWatch() {
    document.getElementById("prinf_watch").innerHTML = '';
    var watch = JSON.parse(localStorage.getItem('watch'));
    for (let i = 0; i < watch.length; i++) {
        var prinf = `<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <div class="produre_box bg-white shadow-sm">
        <div class="image_box">
            <img src="` + watch[i].image + `" width="100%" height="100%" style="">
        </div>
        <div class="info_box p-3 bg-white">
            <p class="float-left font-weight-bold mb-0" style="font-size: 115%">` + watch[i].name + `</p><p class="float-right font-weight-bold mb-2" style="font-size: 115%">` + watch[i].price + `đ</p>
            <div style="clear: both;"></div>            
            <div class="star_box float-left pt-2">
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onclick="getWatchById(${i})">Chi Tiết</button>            
                  <div class="modal fade mt-5" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                        <div id="prinf_watch1">                   
                        </div>
                        </div>
                      </div>
                    </div>                   
                  </div>          
            </div>
            <div class="order_box float-right">
                <div onclick="checkorder(` + watch[i].id + `)" class="order_button float-right pt-2">
                    <a class="btn btn-info btn-add-to-cart" >
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </a>                 
                </div>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</div>`;

        document.getElementById("prinf_watch").innerHTML += prinf;

        if (watch[i]["cate"] === "Đồng hồ nam") {
            var prinf = `<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <div class="produre_box bg-white shadow-sm">
        <div class="image_box">
            <img src="` + watch[i].image + `" width="100%" height="100%" style="">
        </div>
        <div class="info_box p-3 bg-white">
            <p class="float-left font-weight-bold mb-0" style="font-size: 115%">` + watch[i].name + `</p><p class="float-right font-weight-bold mb-2" style="font-size: 115%">` + watch[i].price + `đ</p>
            <div style="clear: both;"></div>            
            <div class="star_box float-left pt-2">              
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onclick="getWatchById(${i})">Chi Tiết</button>            
                  <div class="modal fade mt-5" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                        <div id="prinf_watch1">                   
                        </div>
                        </div>
                      </div>
                    </div>                   
                  </div>          
            </div>
            <div class="order_box float-right">
                <div onclick="checkorder(` + watch[i].id + `)" class="order_button float-right pt-2">
                    <a class="btn btn-info btn-add-to-cart" >
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </a>                 
                </div>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</div>`;
            document.getElementById("watchNam").innerHTML += prinf;
        } else if (watch[i]["cate"] === "Đồng hồ nữ") {
            var prinf = `<div class="col-12 col-sm-6 col-md-4 col-lg-3 p-4">
        <div class="produre_box bg-white shadow-sm">
        <div class="image_box">
            <img src="` + watch[i].image + `" width="100%" height="100%" style="">
        </div>
        <div class="info_box p-3 bg-white">
            <p class="float-left font-weight-bold mb-0" style="font-size: 115%">` + watch[i].name + `</p><p class="float-right font-weight-bold mb-2" style="font-size: 115%">` + watch[i].price + `đ</p>
            <div style="clear: both;"></div>            
            <div class="star_box float-left pt-2">            
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong" onclick="getWatchById(${i})">Chi Tiết</button>            
                  <div class="modal fade mt-5" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                      <div class="modal-content">
                        <div class="modal-body">
                        <div id="prinf_watch1">                   
                        </div>
                        </div>
                      </div>
                    </div>                   
                  </div>          
            </div>
            <div class="order_box float-right">
                <div onclick="checkorder(` + watch[i].id + `)" class="order_button float-right pt-2">
                    <a class="btn btn-info btn-add-to-cart" >
                        <i class="fas fa-shopping-cart" aria-hidden="true"></i>
                    </a>                 
                </div>
            </div>
            <div style="clear: both;"></div>
        </div>
    </div>
</div>`;
            document.getElementById("watchNu").innerHTML += prinf;
        }
    }
}

function CateWatch(type) {
    document.getElementById(type).style.display = 'block';
    switch (type) {
        case 'list_watch_nam':
            document.getElementById('list_watch_home').style.display = 'none';
            document.getElementById('list_watch_nu').style.display = 'none';
            break;
        case 'list_watch_nu':
            document.getElementById('list_watch_home').style.display = 'none';
            document.getElementById('list_watch_nam').style.display = 'none';
            break;
    }
}

function getWatchById (id){
    let html = "";
    let allWatch = JSON.parse(localStorage.getItem('watch'))
    let watch = allWatch.filter(watch =>{
        return watch.id === id
    })
    
    return watch.map((a) => {
        html = `${html} <img src="${a.image}"> ${a.name} <br> ${a.cate} <br>  ${a.note} <br>  <b>Giá: ${a.price}đ <br>
        <a class="btn btn-outline-info btn-detail" onclick="checkorder(` + a.id + `)" >mua</a> 
        `
        document.getElementById("prinf_watch1").innerHTML = html;
    })
    
}

window.onscroll = function() {
    myFunction()
};

function myFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 120) {
        document.getElementById("menu").className = "scroll_event_Add_class";
    } else {
        document.getElementById("menu").className = "";
    }
}


function move_login() {
    document.getElementById("login_box").style.display = 'block';
    document.getElementById("signup_box").style.display = 'none';
}

function move_signup() {
    document.getElementById("login_box").style.display = 'none';
    document.getElementById("signup_box").style.display = 'block';
}


$(document).ready(function() {

    $('#menu_account_login').on('click', function() {
        $('.khung').toggleClass('menu_account_show');
    });


});



function checkout() {
    if(document.getElementById("prinf_order_cart").innerHTML !== '') {
        document.getElementById("payment_form").style.display = 'block';
        document.getElementById("checkout_form").style.display = 'none';
    };
    
}
var bank;

function viettinbank() {
    bank = "viettinbank";
}

function donga() {
    bank = "dongabank";
}

function nama() {
    bank = "namabank";
}

function sacom() {
    bank = "Nhận hàng thanh toán";
}


function management_web() {
    document.getElementById("list_watch_home").style.display = 'none';
    document.getElementById("management_watch").style.display = 'block';

}

function home_page() {
    document.getElementById("list_watch_home").style.display = 'block';
    document.getElementById("management_watch").style.display = 'none';
    listWatch();
}



// var id_order_watch = 0;
// localStorage.setItem("id_order_watch", JSON.stringify(id_order_watch));

// 



var id_order_watch = JSON.parse(localStorage.getItem('id_order_watch'));
if (id_order_watch === null) {
    id_order_watch = [];
    var id_order_watch = 0;
    localStorage.setItem("id_order_watch", JSON.stringify(id_order_watch));
}


var commentCustomer = JSON.parse(localStorage.getItem('commentCustomer'));
if (commentCustomer === null) {
    commentCustomer = [];
    var commentCustomer = [{}];
    localStorage.setItem("commentCustomer", JSON.stringify(commentCustomer));
}



var id_payment = JSON.parse(localStorage.getItem('id_payment'));
if (id_payment === null) {
    id_payment = [];
    var id_payment = 0;
    localStorage.setItem("id_payment", JSON.stringify(id_payment));
}

var idup = JSON.parse(localStorage.getItem('idup'));
if (idup === null) {
    idup = [];
    var idup = 3;
    localStorage.setItem("idup", JSON.stringify(idup));
}


var CheckInfo = JSON.parse(localStorage.getItem('CheckInfo'));
if (CheckInfo === null) {
    CheckInfo = [];
    var CheckInfo = 0;
    localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
}

var watch = JSON.parse(localStorage.getItem('watch'));
if (watch === null) {
    watch = [];
}

var account = JSON.parse(localStorage.getItem('account'));
if (account === null) {
    account = [];
    var account = [{
        id: 0,
        username: "admin",
        password: "123456",
        level: 1
    }, {
        id: 1,
        username: "quangtrung",
        password: "1234567",
        level: 0
    }, {
        id: 2,
        username: "abcdef",
        password: "123456",
        level: 0
    },  {
        id: 3,
        username: "nhatnguyen1",
        password: "nhatnguyen",
        level: 0
    }];
    localStorage.setItem("account", JSON.stringify(account));
}

// var orderWatch=[];
// 
var orderWatch = JSON.parse(localStorage.getItem('orderWatch'));

if (orderWatch === null) {
    orderWatch = [{}];
    localStorage.setItem("orderWatch", JSON.stringify(orderWatch));
}




// 
var account_info = JSON.parse(localStorage.getItem('account_info'));
if (account_info === null) {
    account_info = [];
    var account_info = [{}];
    localStorage.setItem("account_info", JSON.stringify(account_info));
}





// 
var checkLogin = JSON.parse(localStorage.getItem('checkLogin'));
if (checkLogin === null) {
    checkLogin = [];
    var checkLogin = -1;
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
}
if (checkLogin == -1) {

} else if (account[checkLogin].level == 0) {

    document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
    document.getElementById("menu_account_login").innerHTML = account[checkLogin].username;
    document.getElementById("menu_account_login").style.display = 'block';
    document.getElementById("menu_login_button").style.display = 'none';
    document.getElementById("hello_user").innerHTML = "Xin chào " + account[checkLogin].username + " !";
    document.getElementById("menu_logout").style.display = 'block';
    document.getElementById("quanlydon").style.display = 'none';
    orderprinf();
    demOrder();
} else if (account[checkLogin].level == 1) {
    document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
    document.getElementById("menu_account_login").innerHTML = account[checkLogin].username;
    document.getElementById("menu_account_login").style.display = 'block';
    document.getElementById("menu_login_button").style.display = 'none';
    document.getElementById("hello_user").innerHTML = "Xin chào " + account[checkLogin].username + " !";
    document.getElementById("menu_logout").style.display = 'block';
    document.getElementById("quanlydon").style.display = 'block';
    orderprinf();
    demOrder();

}



var paymentWatch = JSON.parse(localStorage.getItem('paymentWatch'));
if (paymentWatch === null) {
    paymentWatch = [];
    var paymentWatch = [{}];
    localStorage.setItem("paymentWatch", JSON.stringify(paymentWatch));
}
console.log(account);

// localStorage.setItem("checkLogin", JSON.stringify(checkLogin));



function Signup() {
    var checkUsername = 0;
    var id = idup;
    var level = 0;
    var username = document.getElementById('usernameSignup').value;
    var password = document.getElementById('passwordSignup').value;
    var Repassword = document.getElementById('RepasswordSignup').value;
    let testUser = (/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(username));
    let testPass = (/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(password));
    let testRePass = (/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/.test(Repassword));
    if (username != '' && password != '' && Repassword != '' && password == Repassword) {
        if(testUser && testPass && testRePass) {
            if (username.length > 5 && password.length > 5 && Repassword.length > 5) {
                for (let i = 0; i < account.length; i++) {
                    if (account[i].username == username) {
        
        
                        checkUsername = 1;
                        break;
                    }
                }
                if (checkUsername == 0) {
                    accountSignup = {
                        id,
                        username,
                        password,
                        level
                    };
                    account.push(accountSignup);
        
                    localStorage.setItem("account", JSON.stringify(account));
        
                    checkLogin = id;
                    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
        
                    var id = idup++;
                    localStorage.setItem("idup", JSON.stringify(idup));
                    document.getElementById("statusSignup").innerHTML = "Đăng ký thành công";
                    document.getElementById("menu_account_login").innerHTML = username;
                    document.getElementById("menu_account_login").style.display = 'block';
                    document.getElementById("menu_login_button").style.display = 'none';
                    document.getElementById("hello_user").innerHTML = "Xin chào " + username + " !";
                    document.getElementById("menu_logout").style.display = 'block';
                    location.reload();
                } else {
                    document.getElementById("statusSignup").innerHTML = "Tên tài khoản đã tồn tại";
                }
            } else document.getElementById("statusSignup").innerHTML = "Vui lòng nhập username và password lớn hơn 6 kí tự";
        } else document.getElementById("statusSignup").innerHTML = "Vui lòng không nhập cứ tự đặt biệt hoặc username và password lớn hơn 6 kí tự";
    } else {
        document.getElementById("statusSignup").innerHTML = "Vui lòng nhập đầy đủ thông tin";
    }
}

function Login() {
    for (i = 0; i < account.length; i++) {
        if ((document.getElementById("usernameLogin").value == account[i].username) && (document.getElementById("passwordLogin").value == account[i].password)) {
            checkLogin = account[i].id;
            localStorage.setItem("checkLogin", JSON.stringify(checkLogin));

            if (account[i].level == 0) {
                document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
                document.getElementById("menu_account_login").innerHTML = account[i].username;
                document.getElementById("menu_account_login").style.display = 'block';
                document.getElementById("menu_login_button").style.display = 'none';
                document.getElementById("hello_user").innerHTML = "Xin chào " + account[i].username + " !";
                document.getElementById("menu_logout").style.display = 'block';
                document.getElementById("quanlydon").style.display = 'none';
                orderprinf();
                demOrder();

                location.reload();

            } else if (account[i].level == 1) {
                document.getElementById("statusLogin").innerHTML = "Đăng nhập thành công";
                document.getElementById("menu_account_login").innerHTML = account[i].username;
                document.getElementById("menu_account_login").style.display = 'block';
                document.getElementById("menu_login_button").style.display = 'none';
                document.getElementById("hello_user").innerHTML = "Xin chào " + account[i].username + " !";
                document.getElementById("menu_logout").style.display = 'block';
                document.getElementById("quanlydon").style.display = 'block';
                orderprinf();
                demOrder();
                location.reload();
            }
        }
    }
    if (checkLogin == -1) {
        document.getElementById("statusLogin").innerHTML = "sai mật khẩu hoặc tài khoản";

    }
}

function delete_order(id_order) {
    for (var i = 0; i < orderWatch.length; i++) {
        if (id_order == orderWatch[i].id_order && checkLogin == orderWatch[i].user_id_order) {
            orderWatch.splice(i, 1);
            localStorage.setItem("orderWatch", JSON.stringify(orderWatch));
            orderprinf();
            demOrder();
            break;
        }
    }
}

function totalMoney(checkLogin) {
    var total_order = 0;
    for (let i = 0; i < orderWatch.length; i++) {
        if (checkLogin == orderWatch[i].user_id_order) {
            total_order += orderWatch[i].price_order * orderWatch[i].quanlity_order;

        }

    }
    document.getElementById("total_money").innerHTML = total_order + "đ";

}

function upQuality(id_order) {
    var ok = 0;
    for (let i = 0; i < orderWatch.length; i++) {
        if (id_order == orderWatch[i].id_order && checkLogin == orderWatch[i].user_id_order) {
            var quality_input_change = document.getElementById('quality_input_change' + i).value;
            orderWatch[i].quanlity_order = quality_input_change;
            ok += orderWatch[i].price_order * orderWatch[i].quanlity_order;
            localStorage.setItem("orderWatch", JSON.stringify(orderWatch));
            orderprinf();
        }
    }
}
document.getElementById("name_customer").value = account[checkLogin].username;
document.getElementById("phone_customer").value = account_info[checkLogin].phone_customer;
document.getElementById("address_customer").value = account_info[checkLogin].address_customer;
for (let i = 0; i < orderWatch.length; i++) {
    if (account_info[i].accountPayment == account[checkLogin].id) {
        CheckInfo = 1;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
    } else {
        CheckInfo = 0;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
    }
}

function back() {
    document.getElementById("payment_form").style.display = 'none';
    document.getElementById("checkout_form").style.display = 'block';
}


function payment() {
    var id_payment = JSON.parse(localStorage.getItem('id_payment'));
    var name_customer = document.getElementById("name_customer").value;
    var phone_customer = document.getElementById("phone_customer").value;
    var address_customer = document.getElementById("address_customer").value;
    var status = "Chờ xác nhận";
    var priceTotal = 0;
    paymentarrpush();
    for (let i = 0; i < orderWatch.length; i++) {
        if (orderWatch[i].user_id_order == checkLogin) {
            priceTotal += orderWatch[i].price_order * orderWatch[i].quanlity_order;
            quanlityPayment = orderWatch[i].quanlity_order;

        }
    }
    accountPayment = account[checkLogin].id;
    paymentarr = {
        id_payment,
        accountPayment,
        showDetailOrder,
        quanlityPayment,
        priceTotal,
        name_customer,
        phone_customer,
        address_customer,
        bank,
        status
    };
    paymentWatch.push(paymentarr);
    localStorage.setItem("paymentWatch", JSON.stringify(paymentWatch));
    id_payment++;
    localStorage.setItem("id_payment", JSON.stringify(id_payment));
    var CheckInfo = JSON.parse(localStorage.getItem('CheckInfo'));
    if (CheckInfo == 0) {
        account_info_arr = {
            accountPayment,
            name_customer,
            phone_customer,
            address_customer,
            bank
        };
        account_info.push(account_info_arr);
        localStorage.setItem("account_info", JSON.stringify(account_info));
        CheckInfo = 1;
        localStorage.setItem("CheckInfo", JSON.stringify(CheckInfo));
        console.log(paymentWatch);
        // paymentPrinf();  
        
    }
    for (let i = 0; i < orderWatch.length; i++) {
        if (checkLogin == orderWatch[i].user_id_order) {
            orderWatch.splice(i, 5);
            localStorage.setItem("orderWatch", JSON.stringify(orderWatch));
            location.reload();
        }
    }
    alert("Đặt hàng thành công")
}

function orderPrinf() {
    document.getElementById("prinf_order").innerHTML = '';
    for (let i = 0; i < paymentWatch.length; i++) {
        if (paymentWatch[i].accountPayment == checkLogin) {
            document.getElementById("prinf_order").innerHTML += paymentWatch[i].showDetailOrder;


        }
    }
}

function checkorder(id) {
    if (checkLogin == -1) {
        alert("Vui long dang nhap");
    } else {


        for (let i = 0; i < orderWatch.length; i++) {
            var checkordervalue = 0;

            if (id == orderWatch[i].id_watch && checkLogin == orderWatch[i].user_id_order) {

                checkordervalue = 1;
                orderWatch[i].quanlity_order++;

                orderWatch[i].quanlity_order;
                localStorage.setItem("orderWatch", JSON.stringify(orderWatch));
                orderprinf();

            }

        }
        if (checkordervalue == 0) {
            orderpush(id);
            orderprinf();

        }
    }
}



function orderpush(id) {
    var paymentWatch = JSON.parse(localStorage.getItem('paymentWatch'));
    id_order = id_order_watch;
    var name_order = watch[id].name;
    var price_order = watch[id].price;
    var image_order = watch[id].image;
    var note_order = watch[id].note;
    var cate_order = watch[id].cate;
    var quanlity_order = 1;
    var user_id_order = checkLogin;
    var id_watch = id;
    watch_order = {
        id_order,
        name_order,
        price_order,
        image_order,
        note_order,
        cate_order,
        quanlity_order,
        user_id_order,
        id_watch
    };
    orderWatch.push(watch_order);

    localStorage.setItem("orderWatch", JSON.stringify(orderWatch));

    console.log(watch_order);
    id_order_watch++;
    localStorage.setItem("id_order_watch", JSON.stringify(id_order_watch));
    demOrder();


    orderprinf();

    console.log(orderWatch);

}

function demOrder() {
    var demOrder = 0;
    for (let i = 0; i < orderWatch.length; i++) {
        if (checkLogin == orderWatch[i].user_id_order)
            demOrder++;
        document.getElementById("order_number").innerHTML = demOrder;

    }
}

function orderprinf() {
    document.getElementById("prinf_order_cart").innerHTML = '';
    var orderWatch = JSON.parse(localStorage.getItem('orderWatch'));
    totalMoney(checkLogin);
    for (let i = 0; i < orderWatch.length; i++) {
        if (checkLogin == orderWatch[i].user_id_order) {
            var prinf_order_cart = `<tr>  
            <td><div>
            <div class="cart_img_box float-left">
            <img src="` + orderWatch[i].image_order + `" width="100%" height="100%">
            </div>
            <div class="cart_info_box float-left pl-3">
            <p class="mb-1 font-weight-bold" style="font-size: 115%;">` + orderWatch[i].name_order + `</p>
            <p style="font-size: 85%">` + orderWatch[i].note_order + `</p>
            </div>
            </div> </td>
            <td class="text-center"><input id="quality_input_change` + i + `" onchange ="upQuality(` + orderWatch[i].id_order + `)" class="cart_input_quanlity mt-2" type="number" value="` + orderWatch[i].quanlity_order + `" name="" min="1" max="20" style=""> </td>
            <td class="text-center"><p class="mt-2" style="padding:5px;">` + orderWatch[i].price_order * orderWatch[i].quanlity_order + `đ</p></td>
            <td class="text-center"><div onclick="delete_order(` + orderWatch[i].id_order + `)" class="cart_button_delete"><i class="fa fa-trash" aria-hidden="true" style="color: #fb9200;font-size: 180%"></i></div> </td>
            </tr>`
            document.getElementById("prinf_order_cart").innerHTML += prinf_order_cart;
        }
    }
}

var showDetailOrder;

function paymentarrpush() {

    showDetailOrder = '';
    totalMoney(checkLogin);

    for (let i = 0; i < orderWatch.length; i++) {
        if (checkLogin == orderWatch[i].user_id_order) {
            var push_cart = `<div class="cart_img_box float-left mb-2" style="width: 80px;">
            <img src="` + orderWatch[i].image_order + `" width="100%" height="100%">
            </div>
            <div class="cart_info_box float-left pl-3">
            <p class="mb-1 font-weight-bold" style="font-size: 115%;">` + orderWatch[i].name_order + `</p>
            <p style="font-size: 85%">` + orderWatch[i].note_order + `</p>
            </div>
            <div class="quanlity" style="float: right;width: 30px;height: 30px;">
            <p>` + orderWatch[i].quanlity_order + `</p>
            </div><div style="clear:both;"></div>`
            showDetailOrder += push_cart;
        }
    }
}

function paymentPrinfUser() {
    document.getElementById("prinfPaymentUser").innerHTML = '';
    // totalMoney(checkLogin);
    var paymentWatch = JSON.parse(localStorage.getItem('paymentWatch'));
    for (let i = 0; i < paymentWatch.length; i++) {
        if (checkLogin == paymentWatch[i].accountPayment) {
            var prinf_payment_cart_user = `<tr style="border-bottom:1px solid #ccc;">
            <td>
            <p>Tên người nhận: ` + paymentWatch[i].name_customer + `</p>
            <p>Địa chỉ: ` + paymentWatch[i].address_customer + `</p>
            <p>Số điện thoại: ` + paymentWatch[i].phone_customer + `</p>
            <p>Ngân Hàng: ` + paymentWatch[i].bank + `</p>
            </td>
            <td>` + paymentWatch[i].showDetailOrder + `<div id="comment_box` + i + `"></div></td>
            <td class="text-center">` + paymentWatch[i].priceTotal + `</td>
            <td class="text-center"><button id="status_prinf` + paymentWatch[i].id_payment + `" onclick="suscess_payment(` + paymentWatch[i].id_payment + `)" class="btn btn-warning text-white">` + paymentWatch[i].status + `</button></td>
            </tr>
            <tr style="width:100%"></tr>
            `
            document.getElementById("prinfPaymentUser").innerHTML += prinf_payment_cart_user;
        }
    }
}

function suscess_payment(id) {
    for (let i = 0; i < paymentWatch.length; i++) {
        if (id == paymentWatch[i].id_payment) {
            paymentWatch[i].status = "Đã nhận được";
            localStorage.setItem("paymentWatch", JSON.stringify(paymentWatch));
            document.getElementById("status_prinf" + id).innerHTML = paymentWatch[i].status;

            var comment_box = `<div class="p-3 pb-0" style="width: 100%;background: #ff6f47;">
            <div style="float: left;width: 50%">
            <label class=" text-white mb-3" style="width: 100%;">Viết phản hồi</label>
            <input id="comment_text` + id + `" type="passwork" class="form-control text-white" id="rePasswordAddInput"  style="width: 100%;background: #ff8f70;border: 0;outline: none;">
            </div>
            <div class="pt-3" style="float: right;width: 50%">
            <button onclick="sendToAdmin(` + id + `)" class="btn btn-warning float-right text-white" >Gửi</button>
            <p id="support_send" class="float-right mb-0 mt-3 text-white"></p>
            </div>
       
            <div style="clear: both;"></div>
            </div>`;

            document.getElementById("comment_box" + i).innerHTML += comment_box;
            document.getElementById("idcover" + i).value = id;
        }
    }
}

function sendToAdmin(id) {
    var checkLogin = JSON.parse(localStorage.getItem('checkLogin'));
    var content_comment = document.getElementById("comment_text" + id).value;
    idPayment = id;
    idUser = checkLogin;
    commentCustomerArr = {
        idPayment,
        idUser,
        content_comment
    };
    commentCustomer.push(commentCustomerArr);
    localStorage.setItem("commentCustomer", JSON.stringify(commentCustomer));
    document.getElementById("support_send").innerHTML = "Gửi phản hồi thành công";
}

function Changepassword() {
    var account = JSON.parse(localStorage.getItem('account'));
    if (document.getElementById("passcurrent").value == account[checkLogin].password && document.getElementById("passnew").value == document.getElementById("passnewrepeat").value) {
        account[checkLogin].password = document.getElementById("passnew").value;
        localStorage.setItem("account", JSON.stringify(account));
        document.getElementById("notification_change_pass").innerHTML = "Đổi mật khẩu thành công";

        setTimeout(() => location.reload(), 1000);

    } else {
        document.getElementById("notification_change_pass").innerHTML = "Sai thông tin mật khẩu";
    }
}

function Logout() {
    document.getElementById("menu_account_login").style.display = 'none';
    document.getElementById("menu_login_button").style.display = 'block';
    document.getElementById("menu_logout").style.display = 'none';
    checkLogin = -1;
    localStorage.setItem("checkLogin", JSON.stringify(checkLogin));
    document.getElementById("order_number").innerHTML = '0';
    document.getElementById("prinf_order_cart").innerHTML = '';
    document.getElementById("payment_form").style.display = 'none';
    document.getElementById("checkout_form").style.display = 'block';
    document.getElementById("name_customer").value = '';
    document.getElementById("phone_customer").value = '';
    document.getElementById("address_customer").value = '';
}

function onloadAll() {
    paymentPrinfUser();
    listWatch();
    localStorage.setItem("watch", JSON.stringify(watch))
    // paymentPrinf();
}

function searchProducts(e) {
    let watchs = [{
        id: 0,
        name: "Đồng hồ Calvin Klein",
        price: "90000",
        note: "Calvin Klein có đường kính 42 mm và độ dày 9 mm",
        cate: "Đồng hồ nam",
        image: "img/1.jpg"
    }, {
        id: 1,
        name: "Đồng hồ TissotT006",
        price: "50000",
        note: "có đường kính 39.3 mm và độ dày 11.55 mm",
        cate: "Đồng hồ nam",
        image: "img/191973136688-1-d0yzyfbu-480-480.jpg"
    }, {
        id: 2,
        name: "Đồng hồ TissotT086",
        price: "130000",
        note: "Đường kính 41 mm cùng độ dày 9.8 mm",
        cate: "Đồng hồ nữ",
        image: "img/674188264174-1-ajawcr3j-480-480.jpg"
    }, {
        id: 3,
        name: "Đồng hồ TissotT065",
        price: "90000",
        note: "là một mẫu đồng hồ cơ thuộc thương hiệu Tissot của Thuỵ Sĩ",
        cate: "Đồng hồ nam",
        image: "img/674188265997-1-kakji7cv-480-480.jpg"
    }, {
        id: 4,
        name: "Đồng hồ Ogival",
        price: "50000",
        note: "đồng hồ Ogival Skeleton chưa bao giờ hết HOT trên thị trường",
        cate: "Đồng hồ nữ",
        image: "img/796483493209-1-mt1fapcb-480-480.jpg"
    }, {
        id: 5,
        name: "Đồng hồ Orient",
        price: "60000",
        note: "Made in Thụy Sĩ by Rolex",
        cate: "Đồng hồ nam",
        image: "img/8430622662218-1-khnrkxlq-480-480.jpg"
    }, {
        id: 6,
        name: "Đồng hồ Benley BL1839",
        price: "300000",
        note: "Được sản xuất thủ công tại Anh",
        cate: "Đồng hồ nữ",
        image: "img/8430622729027-1-tindierw-480-480.jpg"
    }, {
        id: 7,
        name: "Đồng hồ Beley BL1831",
        price: "25000",
        note: "Được sản xuất thủ công tại Anh",
        cate: "Đồng hồ nam",
        image: "img/8430622742859-1-lrsy3vvt-480-480.jpg"
    }];
    let search = document.getElementById('search').value.trim().toLowerCase();
    let arr = JSON.parse(localStorage.getItem("watch"))
    let result = arr.filter( item => {
        if(item.name.toLowerCase().includes(search)) return item 
    })
    !(search === "") ? localStorage.setItem("watch", JSON.stringify(result)) :
    localStorage.setItem("watch", JSON.stringify(watchs))
    if (result.length === 0) {
        alert("Không có sản phẩm phù hợp")
        localStorage.setItem("watch", JSON.stringify(watchs))
    }
}
