var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


window.addEventListener("load", function() {

    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(response){
            return response.json();
        }
    )

    .then(
        function (info){
               
            let trackList = info.tracks.data

            console.log(trackList);
         
         for (let i = 0; i<4; i++){
             
            let trackTitle = trackList[i].title
             let trackArtist = trackList[i].artist.name
             let trackImage = trackList[i].artist.picture_big
             let idTrack = trackList[i].id

             let trackItem = '<a href="track.html?id=' + idTrack + '"><p class= "item">' + trackTitle + ', ' + trackArtist + '</p></a>'
             let imageTrack = '<img src="' + trackImage + '" alt="artista" >'

             document.querySelector('.track-container').innerHTML += imageTrack + trackItem;
             console.log(trackArtist);
             
         }
           let albumList = info.albums.data;

           console.log(albumList);

           for (let i=0; i<4; i++){
               let albumTitle = albumList[i].title;
               let albumArtist = albumList[i].artist.name;
               let albumImage = albumList[i].cover_big;
               let idAlbum = albumList[i].id;
        
               let coverAlbum = '<img class="img-album" src="' + albumImage + '" alt="cover">'
               let albumItem = '<a href="detail-album.html?id=' + idAlbum + '"><p class="item">' + albumTitle + ', ' + albumArtist + '</p></a>'
               
               document.querySelector('.album-container').innerHTML += coverAlbum + albumItem;
               console.log(albumTitle);
               
           }
           
           let artistList = info.artists.data;
           console.log(artistList);

           for (let i=0; i<4; i++){
            let artistName = artistList[i].name;
            let artistImage = artistList [i].picture_big;
            let idArtist = artistList[i].id;

            let artistItem = '<a href="detail-artista.html?id=' + idArtist + '"><p class="item">' + artistName + '</p></a>'
            let imageArtist = '<img class="imgArtista" src="' + artistImage + '" alt=artista >'

            document.querySelector('.artista-container').innerHTML += imageArtist + artistItem;
           
            console.log(artistName);
           }
          
          // let item = document.querySelectorAll('.item')
          // let difference = 2
           

          // item.forEach(function(cada){
           //    cada.addEventListener('mouseover', function (){
           //        obj.style.fontSize = size*difference
          //     })
               
          //     cada.addEventListener('mouseout', function(){
          //  this.style.backgroundColor= 'rgba(230, 148, 40, 0.000)';
          //  })
        //})
        })

    .catch (
        function(error){
            console.log(error);
            
        }
    )

})
