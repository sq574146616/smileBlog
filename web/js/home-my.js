var register = document.getElementById("head-register");
var login = document.getElementById("head-login");
window.onload = function()
{
    var height = document.body.clientHeight;
    document.getElementsByClassName("container")[0].style.height = height;
}
// function ajaxLogin()
// {
//   var $username = $("#username").val();
//   var $password = $("#password").val();
//
//   $.ajax({
//     type : "POST",
//     url : "../LoginServlet",
//     datatype : "json",
//     data : "username=" + $username + "&password=" + $password,
//
//     success : function(result)
//     {
//       result = eval("(" + result + ")");
//       status = result.status;
//       if(status)
//       {
//         window.location.href = "../html/owner-noUse.html?uid=" + result.uid;
//       }
//       else
//       {
//         alert("用户名或密码错误");
//       }
//     }
//   })
// }
//
// function ajaxRegister()
// {
//   var $username = $("#username").val();
//   var $password = $("#password").val();
//   var $nickname = $("#nickname").val();
//
//   $.ajax({
//     type : "POST",
//     url : "../RegisterServlet",
//     datatype : "json",
//     data : "username=" + $username + "&password=" + $password + "&nickname=" + $nickname,
//
//     success : function(result)
//     {
//       result = eval(result);
//       if(result)
//       {
//         alert("注册成功！");
//         location.reload(true);
//       }
//       else
//       {
//         alert("注册失败请重试！");
//       }
//     }
//   })
// }
register.onmouseover = function()
{
    showwords(this);
}
register.onmouseout = function()
{
    hiddenwords(this);
}
register.onclick = function()
{
    $('#show').html(" ").show();
    var nameList = ["username", "password", "confirmPassword", "nickname", "verifyCode"];
    var $newForm = $("<form></form>");
    $newForm.attr({"action": "../RegisterServlet", "method": "post", "class": "reg-log", "id": "register"});
    $('#show').append($newForm);
    for(var i = 0; i < nameList.length; i++)
    {
        var $newSpan = $("<span></span>");
        $newSpan.text(nameList[i] + ":  ");
        $newForm.append($newSpan);
        var $newInput = $("<input>");
        if(nameList[i].indexOf("assword") != -1)
        {
            $newInput.attr({"type": "password", "name": nameList[i], "id": nameList[i]});
        }
        else
        {
            $newInput.attr({"type": "text", "name": nameList[i], "id": nameList[i]});
        }
        $newForm.append($newInput);
        var $newBr = $('<br>');
        $newForm.append($newBr);
        if(nameList[i] == "verifyCode")
        {
            var $newImg = $("<img>");
            $newImg.attr({"src": "../VerifyCodeServlet", "id": "imgVerifyCode"});
            $newForm.append($newImg);
            var $newA = $("<a></a>");
            $newA.attr({"href": "javascript:_hyz()"}).text("change");
            $newForm.append($newA);
        }
        var $newDiv = $("<div></div>");
        $newDiv.attr({"id": nameList[i] + "Error", "class": "prompt"});
        $newForm.append($newDiv);
    }
    var $submitButton = $("<input>").attr({"type": "button", "value": "submit"});
    var $cancleButton = $("<input>").attr({"type": "button", "id": "cancle", "value": "cancle"});
    $newForm.append($submitButton);
    $newForm.append($cancleButton);
    $submitButton.click(function()
    {
        var bool = true;
        if(!validateUsername())
        {
            bool = false;
        }
        if(!validatePassword())
        {
            bool = false;
        }
        if(!validateConfirmPassword())
        {
            bool = false;
        }
        if(!validateNickname())
        {
            bool = false;
        }
        if(!validateVerifyCode())
        {
            bool = false;
        }
        if(bool)
        {
            $("#register").submit();
        }
    });
    $cancleButton.click(function()
    {
        $('#show').html(" ").hide();
    });
    setRegisterBlur();
}
login.onmouseover = function()
{
    showwords(this);
}
login.onmouseout = function()
{
    hiddenwords(this);
}
login.onclick = function()
{
    $('#show').show();
    var nameList = ["username", "password", "verifyCode"];
    var $newForm = $("<form></form>");
    $newForm.attr({"action": "../LoginServlet", "method": "post", "class": "reg-log", "id": "login"});
    $('#show').append($newForm);
    for(var i = 0; i < nameList.length; i++)
    {
        var $newSpan = $("<span></span>");
        $newSpan.text(nameList[i] + ":  ");
        $newForm.append($newSpan);
        var $newInput = $("<input>");
        if(nameList[i].indexOf("assword") != -1)
        {
            $newInput.attr({"type": "password", "name": nameList[i], "id": nameList[i]});
        }
        else
        {
            $newInput.attr({"type": "text", "name": nameList[i], "id": nameList[i]});
        }
        $newForm.append($newInput);
        var $newBr = $('<br>');
        $newForm.append($newBr);
        if(nameList[i] == "verifyCode")
        {
            var $newImg = $("<img>");
            $newImg.attr({"src": "../VerifyCodeServlet", "id": "imgVerifyCode"});
            $newForm.append($newImg);
            var $newA = $("<a></a>");
            $newA.attr({"href": "javascript:_hyz()"}).text("change");
            $newForm.append($newA);
        }
        var $newDiv = $("<div></div>");
        $newDiv.attr({"id": nameList[i] + "Error", "class": "prompt"});
        $newForm.append($newDiv);
    }
    var $submitButton = $("<input>").attr({"type": "button", "value": "submit"});
    var $cancleButton = $("<input>").attr({"type": "button", "id": "cancle", "value": "cancle"});
    $newForm.append($("<br>"));
    $newForm.append($submitButton);
    $newForm.append($cancleButton);
    $submitButton.click(function()
    {
        var bool = true;
        if(!validateLoginUsername())
        {
            bool = false;
        }
        if(!validateLoginPassword())
        {
            bool = false;
        }
        if(!validateLoginVerifyCode())
        {
            bool = false;
        }
        if(bool)
        {
            $("#login").submit();
        }
    });
    $cancleButton.click(function()
    {
        $('#show').html(" ").hide();
    });
    setLoginBlur();
}
function showwords(obj)
{
    obj.children[0].style.opacity = 1;
    obj.children[0].style.top = "0";
}
function hiddenwords(obj)
{
    obj.children[0].style.opacity = 0;
    obj.children[0].style.top = "-60%";
}
function setRegisterBlur()
{
    // 输入框失去焦点时候进行检验
    $('input[name]').blur(function()
    {
        var id = $(this).attr("id");
        //得到对应的校验函数名
        var funName = "validate" + id.substring(0, 1).toUpperCase() + id.substring(1) + "()";
        //执行函数调用
        eval(funName);
    })
}
function setLoginBlur()
{
    // 输入框失去焦点时候进行检验
    $('input[name]').blur(function()
    {
        var id = $(this).attr("id");
        //得到对应的校验函数名
        var funName = "validateLogin" + id.substring(0, 1).toUpperCase() + id.substring(1) + "()";
        //执行函数调用
        eval(funName);
    })
}
function _hyz()
{
    var img = document.getElementById("imgVerifyCode");
    // 需要给出一个参数，这个参数每次都不同，这样清楚浏览器缓存!
    img.src = "../VerifyCodeServlet?a=" + new Date().getTime();
}
// 登陆时候的检验方法
// username检验方法
function validateLoginUsername()
{
    var id = 'username';
    var $username = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$username)
    {
        $validate.text('username has not been empty!');
        return false;
    }
    $validate.text('').css('visibility', 'hidden');
    return true;
}
// password检验方法
function validateLoginPassword()
{
    var id = 'password';
    var $password = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$password)
    {
        $validate.text('password has not been empty!');
        return false;
    }
    $validate.text('').css('visibility', 'hidden');
    return true;
}
// 验证码检验
function validateLoginVerifyCode()
{
    var id = "verifyCode";
    var $verifyCode = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$verifyCode)
    {
        $validate.text('verifyCode has not been empty!');
        return false;
    }
    $.ajax(
        {
            type: "POST",
            url: "../AjaxValidateVerifyCodeServlet",
            datatype: "json",
            data: "verifyCode=" + $verifyCode,
            success: function(result)
            {
                result = eval(result);
                if(!result)
                {
                    $validate.text('verifyCode is wrong!');
                    return false;
                }
            }
        }
    )
    $validate.text('').css('visibility', 'hidden');
    return true;
}
// 注册时候的检验方法
// username检验方法
function validateUsername()
{
    var id = 'username';
    var $username = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$username)
    {
        $validate.text('username has not been empty!');
        return false;
    }
    /**
     * 长度检验
     */
    if($username.length < 4 || $username.length > 15)
    {
        $validate.text('The length of username should between 4 and 15!');
        return false;
    }
    /**
     * 合法性检验
     */
    var pat = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){3,14}$/;
    if(!pat.test($username))
    {
        $validate.text('The first of username should be letter, the rest of username could be _, '
            + 'number, letter!');
        return false;
    }
    /**
     * 是否注册检验
     */

    $.ajax(
        {
            type: "POST",
            url: "../AjaxValidateUsernameServlet",
            datatype: "json",
            data: "username=" + $username,
            success: function(result)
            {
                // 转换成boolean
                result = eval(result);
                if(!result)
                {
                    $validate.text('username has been used!');
                    return false;
                }
            }
        }
    )
    $validate.text('').css('visibility', 'hidden');
    return true;
}
// password检验方法
function validatePassword()
{
    var id = "password";
    var $password = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$password)
    {
        $validate.text('password has not been empty!');
        return false;
    }
    /**
     * 长度检验
     */
    if($password.length < 6 || $password.length > 15)
    {
        $validate.text('The length of username should between 6 and 15!');
        return false;
    }
    $validate.text(' ').css('visibility', 'hidden');
    return true;
}
// confirmPassword检验方法
function validateConfirmPassword()
{
    var id = "confirmPassword";
    var $confirmPassword = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$confirmPassword)
    {
        $validate.text('confirmPassword has not been empty!');
        return false;
    }
    /**
     * 两次密码输入是否一样
     */
    if($confirmPassword != $('#password').val())
    {
        $validate.text('Two input are different!');
        return false;
    }
    $validate.text(' ').css('visibility', 'hidden');
    return true;
}
// nickname检验方法
function validateNickname()
{
    var id = "nickname";
    var $nickname = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$nickname)
    {
        $validate.text('nickname has not been empty!');
        return false;
    }
    /**
     * 长度检验
     */
    if($nickname.length < 3 || $nickname.length > 15)
    {
        $validate.text('The length of username should between 3 and 15!');
        return false;
    }
    /**
     * 合法性检验
     */
    var pat = /^[a-zA-Z]{1}([a-zA-Z0-9]|[_]){2,14}$/;
    if(!pat.test($nickname))
    {
        $validate.text('The first of username should be letter, the rest of nickname could be _, number, letter!');
        return false;
    }
    $validate.text(' ').css('visibility', 'hidden');
    return true;
}
// 验证码检验
function validateVerifyCode()
{
    var id = "verifyCode";
    var $verifyCode = $('#' + id).val();
    var $validate = $('#' + id + 'Error').css('visibility', 'visible');
    /**
     * 非空检验
     */
    if(!$verifyCode)
    {
        $validate.text('verifyCode has not been empty!');
        return false;
    }
    $.ajax(
        {
            type: "POST",
            url: "../AjaxValidateVerifyCodeServlet",
            datatype: "json",
            data: "verifyCode=" + $verifyCode,
            success: function(result)
            {
                result = eval(result);
                if(!result)
                {
                    $validate.text('verifyCode is wrong!');
                    return false;
                }
            }
        }
    )
    $validate.text('').css('visibility', 'hidden');
    return true;
}



// var register=document.getElementById("head-register");
// var login=document.getElementById("head-login");
// var search=document.getElementsByClassName("head-mouse")[0];
// var face=document.getElementsByClassName("face")[0];
// var trlist=document.getElementsByTagName("tr");
// // var setRegister=document.getElementsByClassName("set-register")[0];
// // var setlogin=document.getElementsByClassName("set-login")[0];
// // var setsearch=document.getElementsByClassName("set-search")[0];
// // var cancel=document.getElementsByClassName("cancel")[0];
// //注册
// register.onmouseover=function(){
//     showwords(this);
// }
//
// register.onmouseout=function(){
//     hiddenwords(this);
// }
// register.onclick=function(){
//     //显示注册界面
//     showregister();
// }
// //登录
// login.onmouseover=function(){
//     showwords(this);
// }
//
// login.onmouseout=function(){
//     hiddenwords(this);
// }
// login.onclick=function(){
//     showlogin();
// }
// //搜索
// search.onmouseover=function(){
//     showwords1(this);
// }
//
// search.onmouseout=function(){
//     hiddenwords1(this);
// }
// search.onclick=function(){
//     showsearch();
// }
//
// //取消搜索
// // cancel.onclick=function(){
// // 	setsearch.style.display='none';
// // }
// //注册、登录显示
// function showwords(obj){
//     obj.children[0].style.opacity = 1;
//     obj.children[0].style.top = "0";
// }
//
// function hiddenwords(obj){
//     obj.children[0].style.opacity = 0;
//     obj.children[0].style.top = "-60%";
// }
// //search显示
// function showwords1(obj){
//     obj.children[0].style.opacity = 1;
//     obj.children[0].style.top = "0";
// }
//
// function hiddenwords1(obj){
//     obj.children[0].style.opacity = 0;
//     obj.children[0].style.top = "100%";
// }
//
// function showregister(){
//     var reg = '<form class="set-register" action="" method="post">'+
//         +'<div class="register">'+
//         +'<table>'+
//         +'<tr>'+
//         +'<td>UserName</td>'+
//         +'<td><input type="text" name="" value="unchangeable" onclick="setclear(this)"></td>'+
//         +'</tr>'+
//         +'<tr class="message">'+
//         +'<td></td>'+
//         +'<td id="uesrname"></td>'+
//         +'</tr>'+
//         +'<tr>'+
//         +'<td>Password</td>'+
//         +'<td><input type="text" name="" value="unchangeable" onclick="writepassword(this)"></td>'+
//         +'</tr>'+
//         +'<tr class="message">'+
//         +'<td></td>'+
//         +'<td id="passwod"></td>'+
//         +'</tr>'+
//         +'<tr>'+
//         +'<td>ConfirmPasswrd</td>'+
//         +'<td><input type="password" name="" onclick="setclear(this)"></td>'+
//         +'</tr>'+
//         +'<tr class="message">'+
//         +'<td></td>'+
//         +'<td id="confirm-passwrd"></td>'+
//         +'</tr>'+
//         +'<tr>'+
//         +'<td>VerifyCode</td>'+
//         +'<td>'+
//         +'<input type="text" name="" value=""  class="code" onclick="setclear(this)">'+
//         +'<div class="code-img">1234</div>'+
//         +'<input type="button" name="" value="change" class="next">'+
//         +'</td>'+
//         +'</tr>'+
//         +'<tr class="message">'+
//         +'<td></td>'+
//         +'<td id="verify-code"></td>'+
//         +'</tr>'+
//         +'</table>'+
//         +'<div class="buttonarry">'+
//         +'<input type="submit" name="" value="submit">'+
//         +'<input type="button" name="" value="cancel" onclick="cancel()">'+
//         +'</div>'+
//         +'</div>'+
//         +'</form>';
//     face.innerHTML = reg;
//     // setRegister.style.display='block';
// }
//
// function showlogin(){
//     var login = '<form class="set-login" action="" method="post">'+
//         +'<div class="login">'+
//         +'<table>'+
//         +'<tr>'+
//         +'<td>UserName</td>'+
//         +'<td><input type="text" name="" value="" onclick="setclear(this)"></td>'+
//         +'</tr>'+
//         +'<tr class="message">'+
//         +'<td></td>'+
//         +'<td id="uesrname"></td>'+
//         +'</tr>'+
//         +'<tr>'+
//         +'<td>Password</td>'+
//         +'<td><input type="text" name="" value="" onclick="writepassword(this)"></td>'+
//         +'</tr>'+
//         +'<tr class="message">'+
//         +'<td></td>'+
//         +'<td id="passwod"></td>'+
//         +'</tr>'+
//         +'<tr>'+
//         +'<td>VerifyCode</td>'+
//         +'<td>'+
//         +'<input type="text" name="" value=""  class="code" onclick="setclear(this)">'+
//         +'<div class="code-img"><img src="./VerifyCodeServlet" id="imgVerifyCode"></div>'+
//         +'<input type="button" name="" value="change" class="next">'+
//         +'</td>'+
//         +'</tr>'+
//         +'<tr class="message">'+
//         +'<td></td>'+
//         +'<td id="verify-code"></td>'+
//         +'</tr>'+
//         +'</table>'+
//         +'<div class="buttonarry">'+
//         +'<input type="submit" name="" value="login">'+
//         +'<input type="button" name="" value="cancel" onclick="cancel()">'+
//         +'</div>'+
//         +'</div>'+
//         +'</form>';
//     face.innerHTML = login;
//     console.log(login);
//     // setlogin.style.display='block';
// }
//
// function showsearch(){
//     var search = '<form class="set-search" action="" method=""><div class="cancel" onclick="cancel()">&times;</div><input type="search" name="" value="SEARCH"><div class="icon"><img src="<c:url value=\"/image/searchIcon.png\"/>"></div></form>';
//     face.innerHTML = search;
//     console.log(search);
//     // setsearch.style.display='block';
// }
//
// function cancel(){
//     face.innerHTML = '<div class="eyes"><div id="head-register"><div>REGISTER</div></div><div id="head-login"><div>LOGIN</div></div></div><div class="head-mouse"><div>SEARCH</div></div>';
//     // setRegister.style.display='none';
// }
//
// function setclear(obj){
//     obj.value="";
// }
//
// function writepassword(obj){
//     obj.value="";
//     obj.type="password";
// }
//
// // function setcontainer(){
// // 	var contain=document.createElement("div");
// // 	contain.setAttribute("class","set-container");
// // 	face.appendChild(contain);
// // }
//
// // function showregister(){
// // 	var =document.createElement("table");
// // }
