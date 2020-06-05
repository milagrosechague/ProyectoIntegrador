window.addEventListener("load", function() {

    let queryString = location.search;
    let datos = new URLSearchParams(queryString);
    let idArtist = datos.get('id');
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/" + idArtist)
    .then(
        function(response){
            return response.json();
        }
    )
    .then(
        function(info){
            console.log(info);

            let nombre = info.name
            let fans = info.nb_fan
            let picture = info.picture_big

            document.querySelector('h1').innerHTML = nombre;
            document.querySelector('.fans').innerHTML = fans;
            document.querySelector('.billie1').src = picture;

            let top = info.tracklist;
            let url = "https://cors-anywhere.herokuapp.com/" + top;
            fetch(url)
               .then(
                 function(response){
                       return response.json();
                 }
                )
                .then(
                 function(info){
                     let topTracks = info.data
                     console.log(topTracks);

                     for (let i=0; i<5; i++){
                         let trackTitle = topTracks[i].title;
                         let trackAlbum = topTracks[i].album.title;
                         let trackCover = topTracks[i].album.cover;
                         let idTrack = topTracks[i].id; 

                         let track = `<img src="` + trackCover + `" alt="track-cover">
                                      <div class="titulo">
                                           <a href="track.html?id=` + idTrack + `"><p>`+ trackTitle + `</p></a>
                                           <i>`+ trackAlbum + `</i>
                                      </div>`;
                         document.querySelector('.cancion').innerHTML += track;
                     }
                })   
        }
    )
    

})