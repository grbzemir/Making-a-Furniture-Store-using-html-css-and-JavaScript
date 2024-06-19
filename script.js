$(document).ready(function () {
    $(".menu_btn").click(function () {
        var element = document.getElementById("menu");
        element.style.display = (element.style.display == 'none') ? 'block' : 'none';
    });
}); 