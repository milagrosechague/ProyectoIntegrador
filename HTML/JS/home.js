window.addEventListener("load", function() {
    fetch("https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart")
    .then(
        function(response){
            return response.json();
        }
    )

    .then(
        function (info) {
            
            let trackList = info.tracks.data

            console.log(trackList);
         
         for (let i = 0; i<4; i++){
             
            let trackTitle = trackList[i].title
             let trackArtist = trackList[i].artist.name
             let trackImage = trackList[i].artist.picture

             let trackItem = '<a href="../HTML/track.html"><p>' + trackTitle + ', ' + trackArtist + '</p></a>'
             let imageTrack = '<img src="' + trackImage + '" alt="artista" >'

             document.querySelector('.imgContainer').innerHTML += imageTrack;
             document.querySelector('.nombresContainer').innerHTML += trackItem;
             console.log(trackArtist);
             
         }
           let albumList = info.albums.data;

           console.log(albumList);

           for (let i=0; i<4; i++){
               let albumTitle = albumList[i].title;
               let albumArtist = albumList[i].artist.name;
               let albumImage = albumList[i].cover;
        
               let coverAlbum = '<img class="img-album" src="' + albumImage + '" alt="cover">'
               let albumItem = '<a href="../HTML/detail-album.html"><p>' + albumTitle + ', ' + albumArtist + '</p></a>'
               
               document.querySelector('.cover').innerHTML += coverAlbum;
               document.querySelector('.nombres').innerHTML += albumItem;
               console.log(albumTitle);
               
           }
           
           let artistList = info.artists.data;
           console.log(artistList);

           for (let i=0; i<4; i++){
            let artistName = artistList[i].name;
            let artistImage = artistList [i].picture;

            let artistItem = '<a href="../HTML/detail-artista.html"><p>' + artistName + '</p></a>'
            let imageArtist = '<img class="imgArtista" src="' + artistImage + '" alt=artista >'

            document.querySelector('.fotoArtistas').innerHTML += imageArtist;
            document.querySelector('.artistas').innerHTML += artistItem;
            console.log(artistName);
           }
           
        }


    )

})