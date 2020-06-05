window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/302127")
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

            
            
        

        }
    )
})