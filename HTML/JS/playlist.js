let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idTrack= datos.get('id');

let recuperoStorage = localStorage.getItem('playlist');
if (recuperoStorage == null){
    playlist = [];

}
else{
    playlist = JSON.parse(recuperoStorage);
}
let playlistClass = document.querySelector('.playlistClass');

playlist.forEach(function(idTrack){
    mostrarTrack(idTrack);
});
function mostrarTrack(idTrack){
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + "https://api.deezer.com/tracks/" + idTrack;


    fetch(url)
    .then(function(response){
            return response.json();
        })

    .then(function (datos) { 
        console.log(datos.title);  
            console.log(datos.title);  
        console.log(datos.title);  
        let resultados = datos.data; 
            let resultados = datos.data; 
        let resultados = datos.data; 
        playlistClass.innerHTML += '<li>' + datos.title + '</li>';
        playlistClass.innerHTML += '<li>' + datos.duration + '</li>';
        playlistClass.innerHTML += '<li>' + datos.artist + '</li>';
        playlistClass.innerHTML += '<li>' + datos.album + '</li>';
    })
    .catch(function(error){
        console.log(error);
    })
    return playlistClass;
}
let queryString = location.search;
let datosSearch = new URLSearchParams (queryString);
let search= datosSearch.get('search');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/search/tracks?q=" + search;
fetch(url)
   .then(function(response){
       return response.json()
   })
   .then(function(datosSearch){
       console.log(datosSearch)
       let lista = document.querySelector('resultados')
       let resultados = datosSearch.data;
       resultados.forEach(function(resultado){
           lista.innerHTML += '<li>' + resultado.name + '</li>'
       });
   })
   .catch(function(error){
       console.log(error)
   })