let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idTrack= datos.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/tracks/" + idTrack

let recuperoStorage = localStorage.getItem('.playlist');
if (recuperoStorage = null){
    playlist = [];
}
else{
    playlist = JSON.parse(recuperoStorage);
}
let playlist = document.querySelector('.playlistClass');

playlistClass.forEach(function(idTrack){
    mostrarTrack(idTrack);
});
function mostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + "https://api.deezer.com/tracks/" + idTrack;

    fetch("url")
    .then(function(response){
            return response.json();
        } )

    .then(function (datos) { 
            console.log(datos);
            let playlistClass =document.querySelectorAll('.playlistClass');
            let resultados = datos.data;
            resultados.forEach(function(datos) {
                playlistClass.innerHtml += '<li>' + datos.tittle + '</li>';    
            });     
        })
    .catch(function(error){
        console.log(error);
    })
}