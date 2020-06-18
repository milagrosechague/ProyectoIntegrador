const spinner = document.getElementById("spinner");

    function showSpinner() {
         spinner.className = "show";
         setTimeout(() => {
         spinner.className = spinner.className.replace("show", "");
        }, 15000);
    }

    function hideSpinner() {
        spinner.className = spinner.className.replace("show", "");
         }

window.addEventListener('load', function() {

    function truncateString(str, num, add) {
                    
        if (str.length <= num) {
          return str
        }
        
        return str.slice(0, add) + '...'
    }

    showSpinner()

    let queryString = new URLSearchParams(location.search)
    let loBuscado = queryString.get("search");

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + loBuscado)
    .then(
        function(respuesta) {
        return respuesta.json();            
    })
    .then(function(info) {
        console.log(info)

        hideSpinner()

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

            if (window.matchMedia("(min-width: 2560px)").matches) {

                if (trackAlbum != trackAlbum.toUpperCase()){
                    console.log("es minis");
                    trackAlbum = truncateString(trackAlbum, 16, 15);
                } else if (trackAlbum == trackAlbum.toUpperCase()) {
                    console.log("es mayus")
                    trackAlbum = truncateString(trackAlbum, 15, 14);
                }
            }    

            document.querySelector('.track-container').innerHTML += 
            `<article class="track-info"><div class="img-container">` + img + `</div>
            <a href="track.html?id=`+ idTrack + `" class="title"><p>` + trackTitle + `</p></a>
            <a href="detail-artista.html?id=` + idArtista + `" class="artista"><p>` + trackArtist + `</p></a>
            <a href="detail-album.html?id=` + idAlbum + `" class="album"><p>` + trackAlbum + `</p></a>
            <p class="duracion">` + minutos + `:` + seconds + `</p></article>`  

            let track = document.querySelectorAll('.track-info');

            track.forEach (function (item){
                item.addEventListener('mouseover', function(){
                    this.style.backgroundColor = 'black';
                })
                  
                item.addEventListener('mouseout', function(){
                    this.style.backgroundColor= 'rgba(230, 148, 40, 0.000)';
                })
            })
        
            
        }
      
        let next = info.hasOwnProperty('next');
        let linkNext = info.next;
        
        if (next == true) {
            document.querySelector('.boton').innerHTML += '<a class="more" href="">VER MAS RESULTADOS</a>';
    
            document.querySelector('.more').addEventListener('click', function(e) {
                e.preventDefault();
    
                fetch('https://cors-anywhere.herokuapp.com/' + linkNext)
                .then(function(respuesta) {
                    return respuesta.json();            
                })
                .then(function(datos) {
                    next = datos.hasOwnProperty('next');
                    linkNext = datos.next;
    
                    if (next == true) {
                        let TracksArray = datos.data
                                
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

                            if (window.matchMedia("(min-width: 2560px)").matches) {

                                if (trackAlbum != trackAlbum.toUpperCase()){
                                    console.log("es minis");
                                    trackAlbum = truncateString(trackAlbum, 16, 15);
                                } else if (trackAlbum == trackAlbum.toUpperCase()) {
                                    console.log("es mayus")
                                    trackAlbum = truncateString(trackAlbum, 15, 14);
                                }
                            }
                
                            document.querySelector('.track-container').innerHTML += 
                            `<article class="track-info"><div class="img-container">` + img + `</div>
                            <a href="track.html?id=`+ idTrack + `" class="title"><p>` + trackTitle + `</p></a>
                            <a href="detail-artista.html?id=` + idArtista + `" class="artista"><p>` + trackArtist + `</p></a>
                            <a href="detail-album.html?id=` + idAlbum + `" class="album"><p>` + trackAlbum + `</p></a>
                            <p class="duracion">` + minutos + `:` + seconds + `</p></article>`  

                            let track = document.querySelectorAll('.track-info');

                            track.forEach (function (item){
                                item.addEventListener('mouseover', function(){
                                     this.style.backgroundColor = 'black';
                                })
                                item.addEventListener('mouseout', function(){
                                     this.style.backgroundColor= 'rgba(230, 148, 40, 0.000)';
                                })
                            })
                            
                        }
                    } else {
                        document.querySelector('.botones').innerHTML = '';
                    }
                }) 
            })           
        }
    })       
})


