$(document).ready(function () {
    var buttonsArray = [false, false, false, false, false, false, false, false, false];
    var mousePressed = false;
    var backRGB = document.getElementById("colors").value;
    var _clicked_c = false;
    var _clicked_s = false;


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
        if(!_clicked_c) {
            _clicked_c = true;

            $('.case').one("click", function () {
                d3.select(this).append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 10).attr("cy", 10).attr("r", 10).style("fill", backRGB);
            })
        }




    });

    $("#square").click(function () {

        if(!_clicked_s) {
            _clicked_s = true;

            $('.case').click(function () {

                var svgContainer = d3.select(this).append("svg")
                    .attr("width", 200)
                    .attr("height", 200);
                //make the rectangle
                var rectangle = svgContainer.append("rect")
                    .attr("x", this)
                    .attr("y", this)
                    .attr("width", 50)
                    .attr("height", 50);
            })
        }


    });

});
