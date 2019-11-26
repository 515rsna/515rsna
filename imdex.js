$(document).ready(function(){
    var $menu = $(".menu1"),
        $port_01 = $("port_01 > div");

        $menu.click(function(){
            x.preventDefault();
            $menu.removeClass('on');
            $(this).addClass('on');
        });

})