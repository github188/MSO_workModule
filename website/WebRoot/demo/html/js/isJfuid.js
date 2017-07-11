$(window).focus(function(){
    if(isNull(sessionStorage.getItem("jfuid"))){
        window.location.href="login.html";
    }
});