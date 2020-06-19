window.addEventListener("load", function(){
    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let idTrack = datos.get('id'); 

    document.querySelector('.cancion').innerHTML = '<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&width=700&height=350&color=007FEB&layout=&size=medium&type=tracks&id=' + idTrack +'&app_id=1" width="100%" height="88"></iframe>';

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/" + idTrack)
    .then(
        function(response){
            return response.json();
        }
    )
    .then (
        function (info) {
            console.log(info);
            
            let titulo = info.title
            document.querySelector('h1').innerHTML = titulo;

            let trackImage = info.album.cover_big
            document.querySelector('.trackImage').src = trackImage; 

            let album = info.album.title
            let idAlbum = info.album.id
            document.querySelector('.album').innerHTML = '<a href="detail-album.html?id=' + idAlbum + '">'+ album + '</a>'; 

            let artista = info.artist.name
            let idArtista = info.artist.id
            document.querySelector('.artist').innerHTML = '<a href="detail-artista.html?id=' + idArtista + '">'+ artista + '</a>';
            document.querySelector('.mas').innerHTML = 'Mas Canciones de '+ artista;

            let estado = true
            
            let arrayPlaylist;
          
            if (localStorage.getItem("playlist") != null) {
                arrayPlaylist = localStorage.getItem("playlist").split(",");
                if (arrayPlaylist.includes("" + idTrack) == true) {

                    document.querySelector('.add').innerHTML += `
                    <i class="fas fa-music">-</i>
                    `
                    estado = false;
                } else {
                    document.querySelector('.add').innerHTML += `
                    <i class="fas fa-music">+</i>
                    `
                    estado = true;
                }
            } else {
                document.querySelector('.add').innerHTML += `
                <i class="fas fa-music">+</i>
                `
                estado = true;
            }

            if (estado == true) {
                document.querySelector(".add").addEventListener("click", function() {
                    document.querySelector('i').innerHTML = "-";

                    if (localStorage.getItem("playlist") != null) {
                    
                        //arrayDeGifsFavoritos y le voy a agregar el código el GIF
                    arrayPlaylist = localStorage.getItem("playlist").split(",")
                    if (arrayPlaylist.includes("" + idTrack) != true) {
                        arrayPlaylist.push(idTrack)
                    }

                    } else {
                    //TENGO QUE CREAR UN ARRAY NUEVO CON EL CODIGO DEL GIF
                     arrayPlaylist = []
                     arrayPlaylist.push(idTrack)
                }
                
                localStorage.setItem("playlist", arrayPlaylist);
            
                })
            } else {

                console.log(arrayPlaylist)

                let remove = document.querySelector('.add');

                remove.addEventListener('click', function() {

                    for (let i = 0; i < arrayPlaylist.length; i++) {
                        if(arrayPlaylist[i] == idTrack) {
                            arrayPlaylist.splice(i, 1);
                        }
                    }

                    document.querySelector('.add i').innerHTML = "+";

                    console.log(arrayPlaylist);
                    localStorage.setItem("playlist", arrayPlaylist);
                })
            }
            

            //seccion canciones de artista

            let otras = info.artist.tracklist
            let url = "https://cors-anywhere.herokuapp.com/" + otras

            fetch(url)
            .then(
                function(response){
                    return response.json();
                }
            )
            .then(
                function(informacion){
                    console.log(informacion);
                    let trackArray = informacion.data
                    let nuevoArray = trackArray.filter(function (track) {
                        console.log(idTrack);
                        return track.id != idTrack
                    })
                    console.log(nuevoArray);
                    

                    for(let i=0; i<6; i++){

                        let titulo = nuevoArray[i].title;
                        let trackId = nuevoArray[i].id;

                        let single = '<li><a href="track.html?id=' + trackId +'" class="titulo">' + titulo + '</li>'

                        document.querySelector('.titulos-canciones').innerHTML += single;
                    }
                })
                .catch(function(error){
                    console.log(error);
                })
            
        })
        .catch(function(error){
            console.log(error);
        })
})