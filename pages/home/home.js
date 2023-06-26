page('/', homePage); // Define route for the home page
page('/dlnetNimbus', dlnetNimbusPage); // Define route for the dlnetNimbus page

function homePage() {
  // Code to execute when the home page is accessed
  // e.g., load content, update UI, etc.
  console.log('Home page accessed');
}

function dlnetNimbusPage() {
  // Code to execute when the dlnetNimbus page is accessed
  // e.g., load content, update UI, etc.
  console.log('dlnetNimbus page accessed');
}


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
