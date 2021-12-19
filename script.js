

$(document).ready(function () {
    var buttonsArray = [false, false, false, false, false, false, false, false, false];
    var mousePressed = false;
    var backRGB = document.getElementById("colors").value;
    var backRGBCopie = document.getElementById("colors").value;
    var isEnable = false;

//tracage sur toutes les div des cases du tableaux
    $(".case").mouseover(function () {

        if (mousePressed === true) {
            $(this).css("background-color", backRGB);

        }

    });
//fonction gomme, cas 1 on appuie une fois et on gomme les pixels que l'on souhaite , cas 2 on reactive la couleur sans avoir à la sélectionner
    $("#gomme").click(function () {
        isEnable = !isEnable


        alert(backRGB);
        alert(isEnable);
        if (isEnable === true) {

            backRGB="#808080";

            backRGB = background;
        } else if (isEnable === false) {

            document.getElementById("colors").onchange = function () {
                backRGB = this.value;
                console.log(backRGBCopie);
            }
            backRGB=backRGBCopie;
        }


    });


//effacement du tableau
    $("#delete").click(function () {

        $(".case").css("background-color", "grey");
    })


    //recuperation de la couleur du color picker
    document.getElementById("colors").onchange = function () {
        backRGB = this.value;
        console.log(backRGB);
    }

    // function pour trigger sur le click gauche de la souris
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