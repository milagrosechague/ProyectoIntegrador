let navegacion = document.querySelectorAll('.ele');

//navegacion.onmouseover = function (){
//    navegacion.style.color = 'white';
//    navegacion.style.textDecoration = 'underline';
//}

navegacion.forEach (function (item){
  item.addEventListener('mouseover', function(){
      this.style.textDecoration = 'underline';
  })

  item.addEventListener('mouseout', function(){
      this.style.textDecoration = 'none';
  })
})


let plataformas = document.querySelectorAll('.plataformas')

//plataformas.onmouseover = (function () {
//  let redSocial = document.querySelector('.usuario');
//  redSocial.style.display = 'block';
//})

plataformas.forEach(function(red){
  let redSocial = document.querySelector('.usuario');
  
  red.addEventListener('mouseover', function(){
    redSocial.style.display = 'block';
  })

  red.addEventListener('mouseout', function(){
    redSocial.style.display = 'none';
  })
})