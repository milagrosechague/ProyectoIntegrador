let queryString = location.search;
let datos = new URLSearchParams (queryString);
let idTrack= datos.get('id');

let proxy = 'https://cors-anywhere.herokuapp.com/';
let url = proxy + "https://api.deezer.com/tracks/" + idTrack

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
            let resultados = datos.data; 
            playlistClass.innerHTML += '<li>' + datos.title + '</li>';
 
            

            let player = document.querySelector('iframe')
            player.src = 'https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=tracks&id='+ idTrack +'&app_id=1'
        })
    .catch(function(error){
        console.log(error);
    })
    return playlistClass;
}