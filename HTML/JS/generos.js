window.addEventListener("load", function() {

   // let queryString = new URLSearchParams(location.search);
   // let playlistID = queryString.get("playlistID")

  // let queryString = location.search;
  // let datos = new URLSearchParams(queryString);
  // let idArtist = datos.get('id');
    
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre")
    .then(
        function(response){
            return response.json();
        }
    )
    .then(
        function(info){
            console.log(info);

            let arrayGeneros = info.data

            for (let i=0; i<arrayGeneros.length; i++){
                let img = arrayGeneros[i].picture_xl
                let nombre = arrayGeneros[i].name
                let idGenero = arrayGeneros [i].id 
               let titulo = document.querySelector('h2');
               titulo.innerHTML = nombre;

               let imagen = document.querySelector('.img-genero');
               imagen.src = img;
               

               document.querySelector('.contenido').innerHTML += '<article class="genero"> <a href = "detailgeneros.html?id='+ idGenero + ' " > <h2>' + nombre + ' </h2> </a> <a href = "detailgeneros.html?id='+ idGenero + ' " ><img src="'+ img + '" alt="rock" class="img-genero"> </a>  </article>';
                

            }
            
        })

        .catch(function(error){
            console.log(error);
        })

})