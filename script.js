var main = function clickMenu() {
    $('img').click(function(){
        console.log("click");
        $('.dropdown-menu').toggle();
    })
};

 
$(document).ready(main);