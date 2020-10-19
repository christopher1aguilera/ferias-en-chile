//funcion para crear grafica y llamar los objetos de api
$(document).ready(function(){
    //funcion de boton
    let consultar = $("#consultar")
    consultar.on("click", function () {
        $.ajax({
            type:"GET",
            url: "https://www.feriadosapp.com/api/holidays.json",
            dataType:"json",
            success: function(datos) {
                //datos estadisticas
                let datosApi = datos.data;
                //ciclo para agregar todas las caracteristicas del pokemon
                for (var i = 0; i < datosApi.length; i++) {
                    //if para agregar el ultimo dato para la grafica y agregar la informacion del pokemon
                    if (i == 0) {
                        document.write(`<table><tr><td> ${datosApi[i]["id"]} </td><td> ${datosApi[i]["date"]} </td><td> ${datosApi[i]["title"]} </td><td> ${datosApi[i]["extra"]} </td><td> ${datosApi[i]["law"]} </td><td> ${datosApi[i]["law_id"]} </td></tr>`)
                    }
                    else if (i == datosApi.length -1) {
                        document.write(`<tr><td> ${datosApi[i]["id"]} </td><td> ${datosApi[i]["date"]} </td><td> ${datosApi[i]["title"]} </td><td> ${datosApi[i]["extra"]} </td><td> ${datosApi[i]["law"]} </td><td> ${datosApi[i]["law_id"]} </td></tr></table>`)
                    }
                    else {
                        document.write(`<tr><td> ${datosApi[i]["id"]} </td><td> ${datosApi[i]["date"]} </td><td> ${datosApi[i]["title"]} </td><td> ${datosApi[i]["extra"]} </td><td> ${datosApi[i]["law"]} </td><td> ${datosApi[i]["law_id"]} </td></tr>`)
                    }
                }

            },
            error: function(error) {
            console.log(error)
            }
        })
    });
})