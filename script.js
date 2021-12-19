$(document).ready(function () {
    var buttonsArray = [false, false, false, false, false, false, false, false, false];
    var mousePressed = false;
    var backRGB = document.getElementById("colors").value;
    var isCarre = false


//tracage sur toutes les div des cases du tableaux
    $
    (".case").mouseover(function () {

        if (mousePressed === true) {
            $(this).css("background-color", backRGB);

        }

    });
//fonction gomme, cas 1 on appuie une fois et on gomme les pixels que l'on souhaite
    $("#gomme").click(function () {

        backRGB = "#808080";


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

    $("#circle").click(function () {
        isCarre = !isCarre
        if (isCarre===true) {
            $('.case').click(function (){
                d3.select(this).append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 10).attr("cy", 10).attr("r", 10).style("fill", backRGB);
            })
        }

        isCarre=false
    });
    $("#square").click(function () {
        isCarre = !isCarre
        if (isCarre) {
            $('.case').click(function (){
                d3.select(this).append("svg").attr("width", 50).attr("height", 50).append("rect").attr("cx", 10).attr("cy", 10).attr("r", 10).style("fill", backRGB);
            })
        }
    });

});
