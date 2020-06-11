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