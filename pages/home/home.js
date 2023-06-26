$(document).ready(function () {
    $("h1").css({ "background": "red" })

    $(".button1").click(() => {
        console.log($("h1")[0].style.display)
        if($("h1")[0].style.display === "none"){
            $("h1").show()
        }else{
            $("h1").hide()
        }
    })
});
