window.addEventListener("load", function() {

    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let idArtist = datos.get('id');

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/" + idArtist)
    .then(
        function(response){
            return response.json();
        }
    )
    .then(
        function(info){
            console.log(info);
            
            let title = info.title
            let artista = info.artist.name
            let cover = info.cover_big
            let publicacion = info.release_date
            let cantidad = info.nb_tracks

            document.querySelector('h1').innerHTML += title + '-' + artista;
            document.querySelector('.billie1').src = cover;
            document.querySelector('.publicacion').innerHTML += publicacion;
            document.querySelector('.cantidad').innerHTML += cantidad + ' canciones'; 

            let canciones = info.tracks.data;
            console.log(canciones);

            for(let i=0; i<canciones.length; i++){
                let name = canciones[i].title
                let artist = canciones[i].artist.name
                let idTrack = canciones[i].id
                let idAlbum = canciones[i].artist.id

                let duracion = canciones[i].duration
                let minutos = duracion/60
                minutos = Math.floor(minutos)
                let seconds = duracion %60
                if(seconds<10){ seconds = '0' + seconds }

                //document.querySelector('.nombre').innerHTML += name;
                //document.querySelector('.duracion').innerHTML += minutos + ':' + seconds;
                //document.querySelector('.artista').innerHTML += artist;

                document.querySelector('.cancion').innerHTML += '<a href="track.html?id=' + idTrack + '"><p>'+ name + '</p></a><p>'+ minutos +':' + seconds + '</p><a href="detail-artista.html?id=' + idAlbum + '"><p>'+ artist +'</p></a>'

            }
            
        

        }
    )
})