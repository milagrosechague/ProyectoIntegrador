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
        let detalleGenero = document.querySelector("h1")
            detalleGenero.innnerHTML = xyz[i].name ;
 
    })
    .catch(function(error){
        console.log(error);
    })
})
