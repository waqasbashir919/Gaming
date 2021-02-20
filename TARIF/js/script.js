

function shownav(){
    document.getElementById('navbar_nav').classList.add('active');
    document.getElementById('showNav_btn').classList.add('hide');
    document.getElementById('hideNav_btn').classList.add('show');
    document.getElementById('show_ul').classList.add('active');
    
}
function hidenav(){
    document.getElementById('navbar_nav').classList.remove('active');
    document.getElementById('showNav_btn').classList.remove('hide');
    document.getElementById('hideNav_btn').classList.remove('show');
    document.getElementById('show_ul').classList.remove('active');
}

$(document).ready(function () {
    $(window).scroll(function () {
        if(this.scrollY > 30){
            $('.module_1  .navbar_nav').addClass("sticky");
            $('.module_1 li').addClass("sticky");
            $('.module_1 a').addClass("sticky");
            $('.module_1 .nav_brand img').addClass("sticky");
            $('.module_1  .navbar_btn').addClass("sticky");
        }
        else{
            $('.module_1 .navbar_nav').removeClass("sticky");            
            $('.module_1 li').removeClass("sticky");            
            $('.module_1 a').removeClass("sticky");            
            $('.module_1 .nav_brand img').removeClass("sticky");            
            $('.module_1  .navbar_btn').removeClass("sticky");                     
        }
    })
})
