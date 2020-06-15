window.addEventListener("load", function() {
    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let idGenero = datos.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/genre/" + idGenero + "/artists"

fetch(url)
    .then(function(response){
            return response.json();
        }
    )

    .then(function (dgenero) { 
        console.log(dgenero);
        let xyz = dgenero.data; 

        for (let i= 0; i<12; i++) {

            let artista = xyz[i].name
            let img = xyz[i].picture_big
            let idArtista = xyz[i].id
            let detalleGenero = document.querySelector(".contenido")
            detalleGenero.innerHTML += '<article class="genero"> <a href = "detail-artista.html?id='+ idArtista + ' " > <h2>' + artista + ' </h2> </a> <img src="'+ img + '" alt="rock" class="img-genero">  </article>'
        }
 
    })
    .catch(function(error){
        console.log(error);
    })
})
