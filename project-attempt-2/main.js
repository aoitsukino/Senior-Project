$(document).ready(() => {
    console.log("ready");

    $(".View-Cart").click(() => {
        $(".cart-modal-container").css("display", "block");
    });
});


$(".closer").click(()=> {
    $(".cart-modal-container").css("display", "none");
});
