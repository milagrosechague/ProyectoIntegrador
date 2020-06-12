window.addEventListener("load", function() {

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/genre/idgenero/artists"

let detalleGenero = document.querySelector(".detalleGenero")

fetch(url)
    .then(function(response){
            return response.json();
        }
    )

    .then(function (dgenero) { 
        console.log(dgenero);
        let xyz = dgenero.data; 
        for(let i=0; i<10; i++) {
            detalleGenero.innnerHTML += '<li>'+ xyz[i].type +  + xyz[i].id + xyz[i].name + '</li>' ;
        }    
    })
    .catch(function(error){
        console.log(error);
    })
