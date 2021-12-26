$(document).ready(function () {
    var buttonsArray = [false, false, false, false, false, false, false, false, false];
    var mousePressed = false;
    var backRGB = document.getElementById("colors").value;
    var _clicked_c = false;
    var _clicked_s = false;
    var circle_enable = false;
    var square_enable = false;

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

        d3.selectAll("svg").remove()
        $(".carre").remove()

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
        circle_enable = true
        square_enable = false



        if (!_clicked_c) {


            $('.case').one("click", function() {
                if (circle_enable === true) {
                    _clicked_c = true;

                    d3.select(this).append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 10).attr("cy", 10).attr("r", 10).style("fill", backRGB);
                }
            })

        }




    });

    $("#square").click(function fb() {
        square_enable = true
        circle_enable = false
        _clicked_c = false;



        if (!_clicked_s) {

            $('.case').click(function () {
                if (square_enable === true) {


                    _clicked_s = true;


                    /* d3.select(this).append("svg").attr("width", 50).attr("height", 50).append("rect").attr("x", this)
                          .attr("y", this)
                          .attr("width", 50)
                          .attr("height", 50)
                          .style("fill", backRGB)*/
                    $(this).append("<div class=\"carre\">\n")
                    $(this).css('color', backRGB)

                }


                //make the square

            })
        }


    });

});
