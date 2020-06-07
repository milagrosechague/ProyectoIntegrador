window.addEventListener('load', function() {


    let queryString = new URLSearchParams(location.search)
    let loBuscado = queryString.get("search");

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + loBuscado)
    .then(
        function(respuesta) {
            return respuesta.json();            
        }
    )
    .then(
        function(info) {
             console.log(info)

             let TracksArray = info.data
             for (let i=0; i<TracksArray.length; i++){
                 let trackImg = TracksArray[i].artist.picture
                 let trackTitle = TracksArray[i].title
                 let trackArtist = TracksArray[i].artist.name
                 let trackAlbum = TracksArray[i].album.title
                 let trackDur = TracksArray[i].duration
                 let img = '<img class="track-img" src="' + trackImg + '" alt="track-image"></img>'

                 let idTrack = TracksArray[i].id
                 let idAlbum = TracksArray[i].album.id
                 let idArtista = TracksArray[i].artist.id

                  let minutos = trackDur/60
                  minutos = Math.floor(minutos)
                  let seconds = trackDur %60
                  if(seconds<10){ seconds = '0' + seconds }

                 document.querySelector('.track-info').innerHTML += 
                 `<div class="img-container">` + img + `</div>
                 <a href="track.html?id=`+ idTrack + `" class="title"><p>` + trackTitle + `</p></a>
                 <a href="detail-artista.html?id=` + idArtista + `" class="artista"><p>` + trackArtist + `</p></a>
                 <a href="detail-album.html?id=` + idAlbum + `" class="album"><p>` + trackAlbum + `</p></a>
                 <p class="duracion">` + minutos + `:` + seconds + `</p>`  

                 let track = document.querySelectorAll('.track-info');

                 track.forEach (function (item){
                    item.addEventListener('mouseover', function(){
                        this.style.backgroundColor = 'rgba(230, 148, 40, 0.719)';

                    })
                  
                    item.addEventListener('mouseout', function(){
                        this.style.backgroundColor= 'rgba(230, 148, 40, 0.000)';
                    })
                  })

            
             }

        })
    })