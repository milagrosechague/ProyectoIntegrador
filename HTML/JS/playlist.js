
let recuperoStorage = localStorage.getItem('playlist');

if (recuperoStorage == null || recuperoStorage =='[]'){
    playlist = [];
    var mensaje = 'no hay canciones en tu playlist';
    alert(mensaje)
}
else{
    playlist = JSON.parse(recuperoStorage);  
}


let playlistClass = document.querySelector('.playlistClass');

playlist.forEach(function(idTrack,index){
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
            playlistClass.innerHTML +=  `<li class="opciones"> <iframe  scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=square&autoplay=false&playlist=false&width=80&height=80&color=007FEB&layout=&size=small&type=playlist&id=`+ idTrack +`&app_id=1" width="80" height="80"></iframe>
                                              ${resultados}
                                              ${datos.artist.name}
                                              ${datos.album} 
                                              ${duration} </li>`;
            let minutos = duration/60
            minutos = Math.floor(minutos)
            let seconds = duration %60
            if(seconds<10){ seconds = '0' + seconds }

          
            if (index <4){
                let imagenTrack = document.querySelector('.fotosInicio');
                imagenTrack.innerHTML += '<img src="'+ datos.artist.picture_medium + '">'
            }
            
         
                 
        })
    .catch(function(error){
        console.log(error);
    })
    return playlistClass;
}
/*let datosSearch = new URLSearchParams (queryString);
let search= datosSearch.get('search');

// let proxy = 'https://cors-anywhere.herokuapp.com/';
let url2 = proxy + "https://api.deezer.com/search/tracks?q=" + search;
fetch(url2)
   .then(function(response){
       return response.json()
   })
   .then(function(datosSearch){
       console.log(datosSearch)
       let buscador = document.querySelector('.buscador')
       let result = datosSearch.data;
       result.forEach(function(resultado){
           buscador.innerHTML += '<li>' + resultado.name + '</li>'
       });
   })
   .catch(function(error){
       console.log(error)
   })*/