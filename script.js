var iscliked = false;

$(document).ready(function () {
    var buttonsArray = [false, false, false, false, false, false, false, false, false];
    var mousePressed = false;

    $(".case").mouseover(function () {

        if (mousePressed === true) {
            $(this).css("background-color", "red");

        }

    });


    document.onmousedown = function (e) {
        buttonsArray[e.button] = true;
        mousePressed = true;
    };
    document.onmouseup = function (e) {
        buttonsArray[e.button] = false;
        mousePressed = false;
    };
    document.oncontextmenu = function () {
        return false;
    }
});