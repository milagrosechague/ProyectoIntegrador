window.addEventListener("load", function() {

  function truncateString(str, num, add) {
                    
    if (str.length <= num) {
      return str
    }
    
    return str.slice(0, add) + '...'
}
    
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
                    let idGenero = arrayGeneros[i].id
                   
                    if( idGenero != 0){
                    let img = arrayGeneros[i].picture_xl
                    let nombre = arrayGeneros[i].name
                    let idGenero = arrayGeneros [i].id 

                    if (window.matchMedia("(min-width: 320px)").matches) {

                        if (nombre != nombre.toUpperCase()){
                            console.log("es minis");
                            nombre = truncateString(nombre, 16, 15);
                        } else if (nombre == nombre.toUpperCase()) {
                            console.log("es mayus")
                            nombre = truncateString(nombre, 15, 14);
                        }
    
                     
                    let titulo = document.querySelector('h2');
                     titulo.innerHTML = nombre;
    
                   let imagen = document.querySelector('.img-genero');
                   imagen.src = img;
                   
    
                   document.querySelector('.contenido').innerHTML += '<article class="genero"> <a href = "detailgeneros.html?id='+ idGenero + ' " > <h2>' + nombre + ' </h2> </a> <a href = "detailgeneros.html?id='+ idGenero + ' " ><img src="'+ img + '" alt="rock" class="img-genero"> </a>  </article>';
                    
                }
                }

                }   
        })

        .catch(function(error){
            console.log(error);
        })

})