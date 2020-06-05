window.addEventListener("load", function() {
fetch("https://api.deezer.com/playlist/908622995/tracks")
    .then(
        function(response){
            return response.json();
        } )

    .then(
        function (playlist) { 
            console.log(Playlist.data);
            for (let i = 0; i < playlist.data.length; i++){
                let track = '<p>' + playlist.data[i].tittle + '</p>'
                Document.queryselector('.estilo').innerhtml += '<primer-cancion>' + track + '</primer-cancion>'
                
            }
        })
    .catch(function(error){
        console.log(error);
        }
        