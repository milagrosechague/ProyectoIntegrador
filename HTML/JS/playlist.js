recuperoStorage = localStorage.getItem('playlist');
let playlist = JSON.parse(recuperoStorage);
let playlistWrapper = document.querySelector('.playlist');
console.log(playlist);

function buscarTracks(idTrack) {
    let proxy = 'https://cors-anywhere.herokuapp.com/';
    let url = proxy + "https://api.deezer.com/track/" + idTrack
fetch("url")
    .then(function(response){
            return response.json();
        } )

    .then(function (info) { 
            console.log(info);
            let info =document.querySelector('.primerCancion');
            primerCancion.innerHtml += '<li>' + info.tittle + '</li>';        
        })
    .catch(function(error){
        console.log(error);
    })
}

        