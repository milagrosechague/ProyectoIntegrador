
let recuperoStorage = localStorage.getItem('playlist');

if (recuperoStorage == null || recuperoStorage =='[]'){
    var mensaje = 'no hay canciones en tu playlist';
    alert(mensaje)
} else{
    let playlistClass = document.querySelector('.playlistClass');
    let arrayTracks = localStorage.getItem("playlist").split(",")

    arrayTracks.forEach(function(idTrack,index){
        mostrarTrack(idTrack,index);
    });
    
    function mostrarTrack(idTrack,index){
        let proxy = 'https://cors-anywhere.herokuapp.com/';
        let url = proxy + "https://api.deezer.com/track/" + idTrack;
    
        fetch(url)
          .then(function(response){
                return response.json();
            })
         .then(function(datos) { 
                   console.log(datos);
                let resultados = datos.title;
                let duration = datos.duration
                let minutos = duration/60
                minutos = Math.floor(minutos)
                let seconds = duration %60
                if(seconds<10){ seconds = '0' + seconds }
    
                let idArtista = datos.artist.id
                let idAlbum = datos.album.id
    
                playlistClass.innerHTML +=  `<li class="opciones"> <iframe  scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=80&height=80&color=007FEB&layout=&size=small&type=playlist&id=`+ idTrack +`&app_id=1" width="80" height="80"></iframe>
                                                 <a href="track.html?id= ${idTrack}"><p> ${resultados} </p></a>
                                                 <a href="detail-artista.html?id= ${idArtista}"><p> ${datos.artist.name} </p></a>
                                                 <a href="detail-album.html?id= ${idAlbum}"><p class= "album"> ${datos.album.title} </p></a>
                                                 <p class= "minutos"> ${minutos} : ${seconds} </p> </li>`;
                if (index <4){
                    let imagenTrack = document.querySelector('.fotosInicio');
                    imagenTrack.innerHTML += '<img src="'+ datos.artist.picture_medium + '">'
                }
                
             
                     
            })
        .catch(function(error){
            console.log(error);
        })
       
    }
}
