var iscliked = false;

$(document).ready(function () {
    var buttonsArray = [false, false, false, false, false, false, false, false, false];
    var mousePressed = false;

    $(".case").mouseover(function () {

        if (mousePressed === true) {
            $(this).css("background-color", backRGB);

        }

    });

    var backRGB = document.getElementById("colors").value;

    document.getElementById("colors").onchange = function() {
        backRGB = this.value;
        console.log(backRGB);
    }


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